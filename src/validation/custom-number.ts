import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";


@ValidatorConstraint()
class ValidateCustomNumber implements ValidatorConstraintInterface {
  private reason: string;

  public validate(value: unknown): boolean {
    this.reason = this.isValid(value);
    return !this.reason;
  }

  public defaultMessage(): string {
    return this.reason;
  }

  private isValid(value: unknown): string {
    return typeof value === "number" ? "" : "Not a number";
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
