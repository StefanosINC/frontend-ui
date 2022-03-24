
// Timecard Model Class

export class TimeCard{

   public id: number =  -1;
   public firstname: string = "";
   public lastname: string = "";
   public punch_in:  string = "";
   public punch_out:  string = "";
   public comments:  string = "";
   public role: string = "";


   constructor(id: number, firstname: string, lastname: string, punch_in: string, punch_out: string, comments: string, role: string){

    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.punch_in = punch_in;
    this.punch_out = punch_out, 
    this.comments = comments;
    this.role = role;

}
}


