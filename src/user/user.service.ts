import {Injectable} from "@nestjs/common";

@Injectable()
export class UserService {
  public doNothing(): Promise<any> {
    return Promise.resolve(null);
  }
}
