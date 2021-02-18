import {IsNumber} from "class-validator";

import {IsCustomNumber} from "../validation/number";
import {IsCustomNumberWithInjection} from "../validation/number2";


export class NativeSchema {
  @IsNumber()
  public data: any;
}

export class CustomSchema {
  @IsCustomNumber()
  public data: any;
}

export class CustomWithInjectionSchema  {
  @IsCustomNumberWithInjection()
  public data: any;
}


