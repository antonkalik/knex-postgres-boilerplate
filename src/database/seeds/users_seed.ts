require('dotenv').config();
import * as process from 'process';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { UserType, Role, DefaultUserData } from 'src/models/UserModel';
import type { Knex } from 'knex';

const defaultPassword = process.env.DEFAULT_PASSWORD as string;

export type User = Omit<UserType, 'password'> & DefaultUserData;

export const fake_users: Array<User> = Array(10)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    email: faker.internet.email().toLowerCase(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    role: Role.User,
  }));

exports.seed = async function (knex: Knex): Promise<void> {
  await knex('user').del();
  const hashed_password: string = await bcrypt.hash(defaultPassword, 10);
  await knex('user').insert(
    fake_users.map((user: User) => ({ ...user, password: hashed_password }))
  );
};
