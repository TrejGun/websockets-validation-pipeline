import {registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraintInterface} from "class-validator";
import {Injectable} from "@nestjs/common";

import {UserService} from "../user/user.service";



@Injectable()
export class ValidateCustomNumberWithInjection implements ValidatorConstraintInterface {
  constructor(private userService: UserService) {}

  private reason: string;

  public async validate(value: unknown, args: ValidationArguments): Promise<boolean> {
    this.reason = await this.isValid(value, args);
    return !this.reason;
  }

  public defaultMessage(): string {
    return this.reason;
  }

  private async isValid(value: unknown, args: ValidationArguments): Promise<string> {
    return "ValidateCustomNumberWithInjection";
  }
}

export function IsCustomNumberWithInjection(constraints = {}, validationOptions?: ValidationOptions) {
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      name: "IsCustomNumberWithInjection",
      target: object.constructor,
      propertyName,
      constraints: [constraints],
      options: validationOptions,
      validator: ValidateCustomNumberWithInjection,
    });
  };
}
