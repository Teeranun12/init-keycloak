import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios, { AxiosResponse } from 'axios';


@Injectable()
export class KeycloakService {
  private baseURL: string;
  private realm: string;
  private clientId: string;
  private clientSecret: string; 

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.baseURL = this.configService.get('KEYCLOAK_BASE_URL');
    this.realm = this.configService.get('KEYCLOAK_REALM');
    this.clientId = this.configService.get('KEYCLOAK_CLIENT_ID');
    this.clientSecret = this.configService.get('KEYCLOAK_CLIENT_SECRET'); 
  }

 async login(username: string, password: string) {
    const body = new URLSearchParams();
    body.append('client_id', this.clientId);
    body.append('client_secret', this.clientSecret);
    body.append('grant_type', 'password');
    body.append('username', username);
    body.append('password', password);

    const header = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const data = await axios
      .post(`${this.baseURL}/realms/${this.realm}/protocol/openid-connect/token`, body, header)
      .catch((err) => {
        throw new Error(err.response.data.error_description);
      });

    return data.data;
  }

  
}