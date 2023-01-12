import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User } from '../../entity/User';
import { RegisterInput } from './register/RegisterInput';
import { MyContext } from '../../../src/types/MyContext';

@Resolver()
export class LoginResolver {

  @Mutation(() => User, { nullable: true })
  async login(
    
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() ctx: MyContext

  ): Promise<User | null> { //Eger password yanlissa null donecek gibi durumlarda.

    const user = await User.findOne({where: {email}});
    if(!user) {
      return null;
    }

    const valid = await bcrypt.compare(password, user.password);

    if(!valid){
      return null;
    }

    if(user.confirmed) {
      return null;
    }

    //! eger undifined degilse
    ctx.req.session!.userId = user.id;

    return user;
  }
}