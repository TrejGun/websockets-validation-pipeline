import {HttpModule, Module} from "@nestjs/common";

import {ValidateCustomNumberWithInjection} from "./number2";
import {UserModule} from "../user/user.module";


@Module({
  imports: [UserModule],
  providers: [ValidateCustomNumberWithInjection],
})
export class ValidationModule {}
