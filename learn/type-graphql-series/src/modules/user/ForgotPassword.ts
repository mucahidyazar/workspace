import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { MyContext } from '../../../src/types/MyContext';
import { redis } from '../../../src/redis';
import { User } from '../../../src/entity/User';
import { v4 } from 'uuid';
import { sendEmail } from '../utils/sendEmail';
import { forgotPasswordPrefix } from '../constants/redisPrefixes';

@Resolver()
export class ForgotPasswordResolver {

  @Mutation(() => Boolean)
  async forgotPassword( @Arg('email') email: string, ): Promise<boolean> { //Eger password yanlissa null donecek gibi durumlarda.

    const user = await User.findOne({ where: {email}});

    if(!user) {
      return true;
    }
    const token = v4();
    await redis.set(forgotPasswordPrefix + token, user.id, "ex", 60*60*24); //1 day expiration
  
    await sendEmail(email, `http://localhost:3000/user/change-password/${token}`)

    return true;
  }
}