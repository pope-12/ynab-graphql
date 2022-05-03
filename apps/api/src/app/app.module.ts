import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { BudgetsModule } from './ynab/budgets/budgets.module';
import { PayeesModule } from './ynab/payees/payees.module';
import { CategoriesModule } from './ynab/categories/categories.module';
import { TransactionsModule } from './ynab/transactions/transactions.module';

@Module({
  imports: [
    BudgetsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot({isGlobal: true}),
    PayeesModule,
    CategoriesModule,
    TransactionsModule,
  ],
  providers: [],
})
export class AppModule {}
