import { UsersClass } from "../class/users.class";

export interface CreatePublication {
  posted_text?: string
  image_url?: string,
  user_id?: number,
  user?: UsersClass
}
