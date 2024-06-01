
import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class UserObject {
    @Field()
    email: string;

    @Field(type => Int)
    userId: number 
}