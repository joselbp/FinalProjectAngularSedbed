export class UsersClass {
  public ID = 0;
  public CreatedAt = null;
  public UpdatedAt = null;
  public DeletedAt = null
  constructor(public name: string, public email: string, public password: string, public avatar?: string) { }
}
