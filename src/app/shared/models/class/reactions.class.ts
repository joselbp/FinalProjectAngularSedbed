import { CommentsClass } from './comments.class';
import { GroupClass } from './group.class';
import { UsersClass } from './users.class';

export class ReactionsClass {
  public ID = 0;
  public CreatedAt = new Date();
  public UpdatedAt = new Date;
  public DeletedAt = new Date;
  constructor(public user_id: number, public post_id: number, public user: UsersClass) { }
}
