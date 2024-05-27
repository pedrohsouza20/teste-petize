export class User {
  constructor(private userName: string) {}

  getUserName() {
    return this.userName;
  }

  setUserName(newUserName: string) {
    this.userName = newUserName;
  }
}
