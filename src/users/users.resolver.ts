
import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { UserObject } from './gql/objects/user.gql.object';
import { UserPayload } from './gql/payloads/user.gql.payload';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {
  }

  @Query(() => UserObject, { name: 'myUser'})
  async user() : Promise<UserObject> {
     return {
       userId: 123,
       email: 'deeznuts@gmail.com'
     }
    // return this.usersService.findById(user.id);
  }

  // @Mutation(() => UserPayload)
  // async userCreate() : Promise<UserPayload> {
  //   return {
  //     userId: 123,
  //     email: 'gflores@gmail.com'
  //   }
  // }
  // const foo = await user()
  // @Query(() => UserObject)
  // async userId() {
  //    return {
  //      userId: 123,
  //    }
    // return this.usersService.findById(user.id);
  // }
  
}
