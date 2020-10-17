export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}
