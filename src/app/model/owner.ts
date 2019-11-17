import { Customer } from './customer';

export class Owner extends Customer {
  private company: string;

  constructor(
    newFirstName: string = '',
    newLastName: string = '',
    newPhone: string = '',
    newEmail: string = '',
    newPassword: string = '',
    newCompany: string = ''
  ) {
      super(newFirstName, newLastName, newPhone, newEmail, newPassword);
      this.company = newCompany;
  }
}
