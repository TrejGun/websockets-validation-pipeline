import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";


@ValidatorConstraint()
class ValidateCustomNumber implements ValidatorConstraintInterface {
  private reason: string;

  public validate(value: unknown, args: ValidationArguments): boolean {
    this.reason = this.isValid(value, args);
    return !this.reason;
  }

  public defaultMessage(): string {
    return this.reason;
  }

  private isValid(value: unknown, args: ValidationArguments): string {
    return "ValidateCustomNumber";
  }
}

export function IsCustomNumber(constraints: any = {}, validationOptions?: ValidationOptions) {
  return (object: Record<string, any>, propertyName: string): void => {
    registerDecorator({
      name: "IsCustomNumber",
      target: object.constructor,
      propertyName,
      constraints: [constraints],
      options: validationOptions,
      validator: ValidateCustomNumber,
    });
  };
}
