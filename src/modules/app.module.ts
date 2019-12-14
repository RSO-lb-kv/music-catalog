import { PromModule } from '@digikare/nestjs-prom';
import { BootModule } from '@nestcloud/boot';
import { NEST_BOOT, NEST_CONSUL } from '@nestcloud/common';
import { ConfigModule } from '@nestcloud/config';
import { ConsulModule } from '@nestcloud/consul';
import { ServiceModule } from '@nestcloud/service';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';

import { LoggingInterceptor } from '../interceptors/logging.interceptor';
import { CatalogModule } from './catalog/catalog.module';
import { DemoModule } from './demo/demo.module';
import { DemoHealthIndicator } from './health/demo-health-indicator.service';
import { HealthModule } from './health/health.module';
import { TerminusService } from './health/terminus.service';

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
    TerminusModule.forRootAsync({
      imports: [HealthModule],
      useClass: TerminusService,
    }),
    PromModule.forRoot(),
    DemoModule,
    HealthModule,
  ],
  providers: [
    DemoHealthIndicator,
    TerminusService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
