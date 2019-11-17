import { Customer } from './customer';

export class Driver extends Customer{
  private carPlate: string;
  private license: string;

  constructor(
    newFirstName: string = '',
    newLastName: string = '',
    newPhone: string = '',
    newEmail: string = '',
    newPassword: string = '',
    newCarPlate: string = '',
    newLicense: string = ''
  ) {
      super(newFirstName, newLastName, newPhone, newEmail, newPassword);
      this.carPlate = newCarPlate;
      this.license = newLicense;
  }
}
