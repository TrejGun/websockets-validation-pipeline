import {Module} from "@nestjs/common";

import {EventsModule} from "./events/events.module";
import {UserModule} from "./user/user.module";
import {ValidationModule} from "./validation/validation.module";

@Module({
  imports: [EventsModule, UserModule, ValidationModule],
})
export class ApplicationModule {}
