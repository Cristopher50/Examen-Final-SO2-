
export class User {
   name?:string;
   latname?:string;
   age?:number;
   email?:string;

   deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
