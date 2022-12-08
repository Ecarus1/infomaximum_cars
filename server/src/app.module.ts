import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      path: 'api',
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),

    CarsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
