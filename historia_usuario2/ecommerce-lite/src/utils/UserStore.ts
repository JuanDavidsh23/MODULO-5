import { users } from "../data/user";
import type { User } from "../interfaces/user";
import { addUserMetadata } from "./decorators";

export class UserStore {

  list(): User[] {
    console.log("GET /users");
    return users;
  }

  findByName(username: string): User | undefined {
    console.log(`GET /users?username=${username}`);
    return users.find(u => u.username === username);
  }

  @addUserMetadata
  create(user: User): void {
    console.log("POST /users");
    users.push(user);
  }

  update(id: number, data: Partial<User>): void {
    console.log(`PATCH /users/${id}`);

    const user = users.find(u => u.id === id);
    if (user) {
      Object.assign(user, data);
    }
  }

  remove(id: number): void {
    console.log(`DELETE /users/${id}`);

    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
      users.splice(index, 1);
    }
  }
}