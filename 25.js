// Create class UserService
// Implement every scenario from dummy users BE in your class
// For each scenario create new method
// Methods can be static
// Read response from BE and console.log it or store it in class properties
// Don't forget to catch errors when request failed

// *Extra task: Delete users with ids 1,2,3,4 and random id from 5 to 10000 simultaneously
// Use Promise.allSettled for this task

class UserService {
  users = [];
  selectedUser = null;
  searchedUsers = [];
  filteredUsers = [];
  carts = null;
  posts = null;
  todos = null;
  page = 0;

  getAllUsers() {
    fetch("https://dummyjson.com/users", {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.error(`Err: ${res.status}`);
        }
      })
      .then((data) => {
        this.users.push(...data.users);
      })
      .catch((err) => {
        console.error();
        `Err: ${err}`;
      });
  }
  getUser(id) {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => {
        console.log(`${res.status} ${res.url}`);
        return res.json();
      })
      .then((data) => {
        this.selectedUser = data;
      });
  }
  searchUser(param) {
    const url = new URL("https://dummyjson.com/users/search");
    url.searchParams.set("q", param);
    fetch(url)
      .then((res) => {
        console.log(`${res.status} ${res.url}`);
        return res.json();
      })
      .then((data) => {
        this.searchedUsers.push(...data.users);
      });
  }
  filterUser(param) {
    const url = new URL("https://dummyjson.com/users/filter");
    url.searchParams.set("key", param.key);
    url.searchParams.set("value", param.value);
    fetch(url)
      .then((res) => {
        console.log(`${res.status} ${res.url}`);
        return res.json();
      })
      .then((data) => {
        this.filteredUsers.push(...data.users);
      });
  }
  async paginatedUsers(limit) {
    const url = new URL("https://dummyjson.com/users");
    url.searchParams.set("limit", limit);
    url.searchParams.set("skip", this.page);

    const res = await fetch(url);
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);

    this.page += limit;
    this.searchedUsers.push(...data.users);
  }
  async getUsersCarts(id) {
    const url = new URL(`https://dummyjson.com/users/${id}/carts`);
    const res = await fetch(url);
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);
    this.carts = data;
  }
  async getUsersPosts(id) {
    const url = new URL(`https://dummyjson.com/users/${id}/posts`);
    const res = await fetch(url);
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);
    this.posts = data;
  }
  async getUsersTodos(id) {
    const url = new URL(`https://dummyjson.com/users/${id}/todos`);
    const res = await fetch(url);
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);
    this.todos = data;
  }
  async createUser(body) {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);

    this.users.push(data);
  }
  async updateUser(id, body) {
    const res = await fetch(`https://dummyjson.com/users/${id}`, {
      method: "PATCH", // or 'PUT'
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(`${res.status} ${res.url}`);

    this.users.push(data);
  }
  async deleteProduct(id) {
    const res = await fetch(`https://dummyjson.com/users/${id}`, {
      method: "DELETE",
    });
    console.log(`${res.status} ${res.url}`);
  }
}
const myUsers = new UserService();

//myUsers.getAllUsers();
//myUsers.getUser(1);
//myUsers.searchUser("John");
//myUsers.filterUser({ key: "hair.color", value: "Brown" });
// myUsers.getUsersCarts(5);
// myUsers.getUsersPosts(5);
// myUsers.getUsersTodos(5);
// myUsers.createUser({
//   firstName: "Muhammad",
//   lastName: "Ovi",
//   age: 250,
// });
// myUsers.updateUser(1, {
//   id: "1",
//   firstName: "Terry",
//   lastName: "Owais",
//   email: "atuny0@sohu.com",
//   phone: "+63 791 675 8914",
//   gender: "male",
// });

// myUsers
//   .paginatedUsers(5)
//   .then(() => myUsers.paginatedUsers(5))
//   .then(() => myUsers.paginatedUsers(5))
//   .then(() => myUsers.paginatedUsers(5));
