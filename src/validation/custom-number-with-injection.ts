import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";
import {Injectable} from "@nestjs/common";

import {UserService} from "../user/user.service";

@Injectable()
@ValidatorConstraint()
export class ValidateCustomNumberWithInjection implements ValidatorConstraintInterface {
  constructor(private userService: UserService) {}

  private reason: string;

  public async validate(value: unknown): Promise<boolean> {
    this.reason = await this.isValid(value);
    return !this.reason;
  }

  public defaultMessage(): string {
    return this.reason;
  }

  private async isValid(value: unknown): Promise<string> {
    await this.userService.doNothing();
    return typeof value === "number" ? "" : "Not a number";
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
