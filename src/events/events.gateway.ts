import {UsePipes} from "@nestjs/common";
import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {Server} from "socket.io";

import {WsValidationPipe} from "./validation.ws";
import {CustomSchema, CustomWithInjectionSchema, NativeSchema} from "./events.shemas";

@UsePipes(WsValidationPipe)
@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("event")
  nativeEvent(@MessageBody() data: NativeSchema): Promise<void> {
    return;
  }

  @SubscribeMessage("custom-event")
  customEvent(@MessageBody() data: CustomSchema): Promise<void> {
    return;
  }

  @SubscribeMessage("custom-event-with-injection")
  customEventWithInjection(@MessageBody() data: CustomWithInjectionSchema): Promise<void> {
    return;
  }

}
