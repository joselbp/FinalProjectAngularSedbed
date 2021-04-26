import { UsersClass } from "./users.class";

export class CommentsClass {
  public ID = 0;
  public CreatedAt = null;
  public UpdatedAt = null;
  public DeletedAt = null;

  constructor(public comment: string, public user_id: number, public User: UsersClass, public post_id: number) { }
}

