import { Resolver, Query, Mutation, Arg, UseMiddleware } from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User } from '../../entity/User';
import { RegisterInput } from './register/RegisterInput';
import { isAuth } from '../middleware/isAuth';
import { logger } from '../middleware/logger';
import { sendEmail } from '../utils/sendEmail';
import { createConfirmationUrl } from '../utils/createConfirmationUrl';

//ORNEK RESOLVER
// @Resolver()
// class HelloResolver {

//   name ile query nin cagrilacak seklini belirtiriz ama iptal edicem alt satiri
//   nullable true demek ! gibidir.
//   @Query(() => String, {name: 'helloWorld',  nullable: true })
//   @Query(() => String, {})
//   async helloWorld() {
//     return "Hello world!";
//   }
// }

@Resolver()
export class RegisterResolver {

  @UseMiddleware(isAuth, logger) //Kendi Middleware im ile userin giris yapip yapmadigi denetimi
  @Query(() => String, {})
  async hello() {
    return "Hello world!";
  }

  @Mutation(() => User, {}) //Mutationun donecegi type = User
  async register(
    
    // //@Arg('firstName')=> Bu aslinda graphql schemanin variablei ve fonksiyon icinde gozukecek vvariable adi 
    // // firstName: string => Buda yukarida gozukecek degerin donecegi der yani name string olacak
    // @Arg('firstName') firstName: string, //@Arg('firstName')'nin type'i
    // @Arg('lastName') lastName: string,
    // @Arg('email') email: string,
    // @Arg('password') password: string,

    //Yukaridaki satir iptal oluyor ve RegisterInputtan sonra asagidaki satir gecerli oluyor.
    //Asaginin anlami. bundan sorna register querysi cagrilirken icinde argument olarak data objesini isteyecek buda RegisterInput Type i donsun diyor Graphql
    @Arg('data') {email, firstName, lastName, password}: RegisterInput,

  ): Promise<User> { //Typescript User return olacak diyor
    //return firstName; //yukaridaki firstName aslinda

    const hashPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword
    }).save();

    await sendEmail(email, await createConfirmationUrl(user.id))

    return user;
  }
}