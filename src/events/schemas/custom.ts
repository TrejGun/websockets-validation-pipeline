import {IsCustomNumber} from "../../validation/custom-number";
import {ICustomFields} from "../interfaces";


export class CustomSchema implements ICustomFields {
  @IsCustomNumber()
  public data: any;
}
