import { BootModule } from '@nestcloud/boot';
import { NEST_BOOT, NEST_CONSUL } from '@nestcloud/common';
import { ConfigModule } from '@nestcloud/config';
import { ConsulModule } from '@nestcloud/consul';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';

import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CatalogModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    ConsulModule.register({dependencies: [NEST_BOOT]}),
    BootModule.register(resolve(), 'consul.yml'),
    ConfigModule.register({dependencies: [NEST_BOOT, NEST_CONSUL]})
  ],
})
export class AppModule {}
