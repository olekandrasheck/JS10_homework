class MockServer {
  #users = [
    { id: 1, name: "Aaron", age: 20 },
    { id: 2, name: "Bernard", age: 25 },
    { id: 3, name: "Connor", age: 36 },
    { id: 4, name: "Daniel", age: 32 },
    { id: 5, name: "Evan", age: 30 },
    { id: 6, name: "Francis", age: 19 },
    { id: 7, name: "George", age: 21 },
    { id: 8, name: "Harry", age: 45 },
    { id: 9, name: "Jack", age: 16 },
    { id: 10, name: "Kevin", age: 27 },
    { id: 11, name: "Malcolm", age: 59 },
  ];
  result = {
    status: false,
    message: "",
    data: undefined,
  };
  isUserExist = (id) =>
    this.#users.some((currentUser) => {
      return currentUser.id === id;
    });

  // get users() {
  //   return this.#users;
  // }
  setResult = (status, message, data) => {
    this.result.status = status;
    this.result.message = message;
    this.result.data = data;
    return this.result;
  };

  getAllUsers = () => {
    this.setResult(true, "is your list of users", this.#users);
    return this.result;
  };

  getUser = (id) => {
    if (this.isUserExist(id)) {
      const user = this.#users.find((currentUser) => currentUser.id === id);
      this.setResult(true, "is your user", user);
    } else {
      this.setResult(false, "we don't have this user", undefined);
    }
    return this.result;
  };

  addUser = (user) => {
    const isAllPropExist = !!user.id && !!user.name && !!user.age;
    if (isAllPropExist && !this.isUserExist(user.id)) {
      this.#users.push(user);
      this.setResult(true, "user was added successfully", true);
    } else {
      this.setResult(false, "user was't added", false);
    }
    return this.result;
  };

  updateUser = (user) => {
    if (this.isUserExist(user.id)) {
      this.#users = this.#users.map((item) =>
        item.id === user.id ? user : item
      );
      this.setResult(true, "users were updated successfully", this.#users);
    } else {
      this.setResult(false, "users weren't updated", false);
    }
    return this.result;
  };

  deleteUser = (id) => {
    if (this.isUserExist(id)) {
      const withoutDeletedUser = this.#users.filter(
        (currentUser) => currentUser.id !== id
      );
      this.#users = withoutDeletedUser;
      this.setResult(true, "user was deleted successfully", true);
    } else {
      this.setResult(false, "user was not deleted", false);
    }
    return this.result;
  };
}
const myVariable = new MockServer();

const promiseDecarated = (func, arg) => {
  return () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = func(arg);
        if (result.status === true) {
          resolve(result);
        } else {
          reject(result);
        }
        console.log(result);
      }, 1000);
    });
  };
};

const objUserForAdding = { id: 13, name: "John", age: 23 };
const objForUpdating = { id: 13, name: "Johnas", age: 32 };

const addUser = promiseDecarated(myVariable.addUser, objUserForAdding);
const updateUser = promiseDecarated(myVariable.updateUser, objForUpdating);
const deleteUser = promiseDecarated(myVariable.deleteUser, 13);
const getAllUsers = promiseDecarated(myVariable.getAllUsers);
const getUser = promiseDecarated(myVariable.getUser, 2);

addUser()
  .then(() => {
    return getAllUsers();
  })
  .then(() => {
    return updateUser();
  })
  .then(() => {
    return getAllUsers();
  })
  .then(() => {
    return deleteUser();
  })
  .then(() => {
    return getAllUsers();
  })
  .then(() => {
    return getUser();
  });

const checkAsync = async () => {
  const func = promiseDecarated(myVariable.getAllUsers);
  const result = await func();
  console.log(result);
};
checkAsync();
