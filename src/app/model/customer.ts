export class Customer {
  protected firstName: string;
  protected lastName: string;
  protected phone: string;
  protected email: string;
  protected password: string;

  constructor(
      newFirstName: string = '',
      newLastName: string = '',
      newPhone: string = '',
      newEmail: string = '',
      newPassword: string = '',

      //user role code:
      // 1 - Customer
      // 2 - Driver
      // 3 - restaurant owner
      //private userRole: number = 1 
  ) {
    this.firstName = newFirstName;
    this.lastName = newLastName;
    this.phone = newPhone;
    this.email = newEmail;
    this.password = newPassword;
  }

  public setFirstName(firstName: string){
    this.firstName = firstName;
  }

  public getFirstName(): string{
    return this.firstName;
  }

  public setLastName(lastName: string){
    this.lastName = lastName;
  }

  public getLastName(): string{
    return this.lastName;
  }

  public setPhone(phoneNumber: string){
    this.phone = phoneNumber;
  }

  public getPhone(): string{
    return this.phone;
  }    

  public setEmail(email: string){
    this.email = email;
  }

  public getEmail(): string{
    return this.email;
  }

  public setPassword(password: string){
    this.password = password;
  }



}