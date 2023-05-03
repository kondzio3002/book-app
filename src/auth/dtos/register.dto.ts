import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

class RegisterDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  password: string;

  
}