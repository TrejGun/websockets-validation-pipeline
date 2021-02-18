import {IsNumber} from "class-validator";

import {INativeFields} from "../interfaces";


export class NativeSchema implements INativeFields {
  @IsNumber()
  public data: any;
}
