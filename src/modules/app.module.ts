import { BootModule } from '@nestcloud/boot';
import { NEST_BOOT, NEST_CONSUL } from '@nestcloud/common';
import { ConfigModule } from '@nestcloud/config';
import { ConsulModule } from '@nestcloud/consul';
import { ServiceModule } from '@nestcloud/service';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';

import { CatalogModule } from './catalog/catalog.module';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CatalogModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    BootModule.register(resolve(), 'consul.yml'),
    ConsulModule.register({
      dependencies: [NEST_BOOT],
    }),
    ConfigModule.register({ dependencies: [NEST_BOOT, NEST_CONSUL] }),
    ServiceModule.register({
      dependencies: [NEST_BOOT, NEST_CONSUL],
    }),
    DemoModule,
  ],
})
export class AppModule {}
