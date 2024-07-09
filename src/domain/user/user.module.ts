import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { KeycloakModule } from "src/infrastructure/keycloak/keycloak.module";

@Module({
  imports: [TypeOrmModule.forFeature([User]) , KeycloakModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
