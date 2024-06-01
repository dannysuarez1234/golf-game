import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [UsersModule,
   GamesModule,
   GraphQLModule.forRoot<ApolloDriverConfig>({driver: ApolloDriver,autoSchemaFile: true}),],
  providers: [AppService],
})
export class AppModule {}
