import {Module} from "@nestjs/common";

import {ValidateCustomNumberWithInjection} from "./custom-number-with-injection";
import {UserModule} from "../user/user.module";

@Module({
  imports: [UserModule],
  providers: [ValidateCustomNumberWithInjection],
})
export class ValidationModule {}
