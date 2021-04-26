import { CommentsClass } from './comments.class';
import { GroupClass } from './group.class';
import { ReactionsClass } from './reactions.class';
import { UsersClass } from './users.class';

export class PublicationsClass {
  public ID = 0;
  public CreatedAt = new Date();
  public UpdatedAt = new Date();
  public DeletedAt = new Date();
  constructor(
    public user_id: number,
    public group?: GroupClass,
    public comments?: CommentsClass[],
    public reactions?: ReactionsClass[],
    public user?: UsersClass,
    public posted_text?: string,
    public image_url?: string
  ) { }
}
