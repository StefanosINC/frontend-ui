
// Employee Model Class

export class Employee{

    public  employee_id: number = -1;
    public  username: string = "";
    public password: string = "";
    public  email: string = "";
    public phone: string = "";
    public firstname: string = "";
   public lastname: string = "";
   public role: string = "";
    
   // constructor

    constructor(employee_id: number, username: string, password: string, email: string, phone: string, firstname: string, lastname: string, role: string){

        this.employee_id = employee_id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone, 
        this.firstname = firstname,
        this.lastname = lastname;
        this.role = role;

    }

}