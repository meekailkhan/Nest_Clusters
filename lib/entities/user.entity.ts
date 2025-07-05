import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { Column, Entity, InstanceChecker, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:string

    @Column({type:'varchar',length:50})
    @IsNotEmpty({message : 'First Name is required'})
    @IsString({message : "first name must be a string"})
    @Length(1,50,{message : "first name must be 1 to 50 characters"})
    firstName:string


    @Column({type:'varchar',length:25})
    @IsNotEmpty({message : "last name is required"})
    @IsString({message : "last name must be a string"})
    @Length(1,50,{message : "last name must be between 1 to 50 charaters"})
    lastName:string

    @Column({unique:true})
    @IsNotEmpty({message:"email is required"})
    @IsEmail({},{message:"invalid email"})
    email:string
    
}
