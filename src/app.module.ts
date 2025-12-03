import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { FactoriesModule } from './factories/factories.module';
import { PermissionsModule } from './permissions/permissions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USER,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: false,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    FactoriesModule,
    PermissionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
