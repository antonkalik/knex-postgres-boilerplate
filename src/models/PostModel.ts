import { Model } from 'src/models/Model';

export type PostType = {
  id: number;
  title: string;
  content: string;
  user_id: number;
};

export class PostModel extends Model {
  static tableName = 'posts';
}
