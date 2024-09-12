import { Module } from '@nestjs/common';
import { UsersModule } from './modules/usuarios/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { join } from 'path';
import { FornecedoresResolver } from './modules/fornecedores/fornecedores.resolver';
import { dataSourceOptions } from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
  ],
  controllers: [],
  providers: [FornecedoresResolver],
})
export class AppModule {}
