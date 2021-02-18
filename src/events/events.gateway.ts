import {UsePipes} from "@nestjs/common";
import {MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";

import {WsValidationPipe} from "../common/pipes/ws.validation";
import {CustomSchema, CustomWithInjectionSchema, NativeSchema} from "./schemas";

@UsePipes(WsValidationPipe)
@WebSocketGateway()
export class EventsGateway {
  @SubscribeMessage("event")
  nativeEvent(@MessageBody() data: NativeSchema): any {
    return data;
  }

  @SubscribeMessage("custom-event")
  customEvent(@MessageBody() data: CustomSchema): any {
    return data;
  }

  @SubscribeMessage("custom-event-with-injection")
  customEventWithInjection(@MessageBody() data: CustomWithInjectionSchema): any {
    return data;
  }
}
