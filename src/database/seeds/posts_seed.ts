import { fake_users, User } from './users_seed';
import { faker } from '@faker-js/faker';
import type { PostType } from 'src/models/PostModel';

const fake_posts: Array<PostType> = fake_users.map((user, index) => ({
  id: index + 1,
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraph(),
  user_id: user.id,
}));

exports.seed = async function (knex) {
  await knex('posts').del();
  await knex('posts').insert(fake_posts);
};
