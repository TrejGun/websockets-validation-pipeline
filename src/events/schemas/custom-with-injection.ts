import {IsCustomNumberWithInjection} from "../../validation/custom-number-with-injection";
import {ICustomWithInjectionFields} from "../interfaces";


export class CustomWithInjectionSchema implements ICustomWithInjectionFields {
  @IsCustomNumberWithInjection()
  public data: any;
}
