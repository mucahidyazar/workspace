import {
  Length,
  IsEmail,
  Min
} from 'class-validator';
import { InputType, Field } from 'type-graphql';
import { IsEmailAlreadyExist } from './isEmailAlreadyExist'; //Bu sadece Custom yani kendi yapacagimiz validatorlara bir ornektir.
import { PasswordInput } from '../../../../src/modules/shared/PaswordInput';

@InputType()
export class RegisterInput extends PasswordInput {
  @Field()
  @Length(1, 255, {message: "Hata"}) //Bu sekilde Custom error messageler olusturup yakalayabiliriz.
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @IsEmail()
  @IsEmailAlreadyExist({message: "Email already exist"})
  email: string;
}