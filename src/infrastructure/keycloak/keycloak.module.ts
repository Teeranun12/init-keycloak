import { Module } from "@nestjs/common";
import { config as dotenvConfig } from "dotenv";
import {
  AuthGuard,
  KeycloakConnectModule,
  PolicyEnforcementMode,
  RoleGuard,
  TokenValidation,
} from "nest-keycloak-connect";
import { KeycloakService } from "./keycloak.service";
import { APP_GUARD } from "@nestjs/core";

dotenvConfig({ path: ".env" });

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: process.env.KEYCLOAK_BASE_URL,
      realm: process.env.KEYCLOAK_REALM,
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      secret: process.env.KEYCLOAK_CLIENT_SECRET,
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE, // optional
      tokenValidation: TokenValidation.ONLINE, // optional
    }),
  ],
  providers: [
    KeycloakService, 
     {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ], 
  exports: [KeycloakService],
})
export class KeycloakModule {}
