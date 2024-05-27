import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import typeorm from "./infrastructure/config/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get("typeorm"),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {}
