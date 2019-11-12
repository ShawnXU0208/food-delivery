export class Customer {
    constructor(
        private firstName: string = '',
        private lastName: string = '',
        private phoneNumber: string = '',
        private email: string = '',
        private password: string = '',

        //user role code:
        // 1 - Customer
        // 2 - Driver
        // 3 - restaurant owner
        private userRole: number = 1 
    ) { }

    public setFirstName(firstName: string){
      this.firstName = firstName;
    }

    public setLastName(lastName: string){
      this.lastName = lastName;
    }

    public setPhone(phoneNumber: string){
      this.phoneNumber = phoneNumber;
    }

    public setEmail(email: string){
      this.email = email;
    }

    public setPassword(password: string){
      this.password = password;
    }

    public setUserRole(roleCode: number){
      this.userRole = roleCode;
    }
}