import { UsersClass } from "./users.class";

export class GroupClass {
  public ID = 0;
  public CreatedAt = null;
  public UpdatedAt = null;
  public DeletedAt = null;

  constructor(public name: string, public description: string, public users?: UsersClass[], public imageUrl?: string, public creator_id?: number) { }
}
