import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  userEmail: any;
  userPassword: any;
  userLogin: any;
  userId: number;
  editStatus: boolean;
  editIndex: number;
  users: Array<IUser> = [];
  constructor() { }

  ngOnInit() {
  }
  addUser(): void {
    // tslint:disable-next-line: no-use-before-declare
    const newUser: IUser = new User(1, this.userLogin, this.userEmail, this.userPassword);
    if (this.userLogin) {
      if (this.users.length > 1) {
        newUser.id = this.users.slice(-1)[0].id + 1;
      }
    }
    this.users.push(newUser);
    this.clearForm();
  }

  edit(index: number): void {
    this.userLogin = this.users[index].login;
    this.userEmail = this.users[index].email;
    this.userPassword = this.users[index].password;
    this.editStatus = true;
    this.editIndex = index;
  }
  delete(index: number): void {
    this.users.splice(index, 1);
  }
  saveEditUser(): void {
    // tslint:disable-next-line: no-use-before-declare
    const newUser: IUser = new User(this.editIndex, this.userLogin, this.userEmail, this.userPassword);
    this.users.splice(this.editIndex, 1, newUser);
    this.editStatus = false;
    this.clearForm();
  }
  clearForm(): void {
    this.userLogin = '';
    this.userEmail = '';
    this.userPassword = '';
  }
}
interface IUser {
  id: number;
  login: string;
  email: string;
  password: string;
}
class User implements IUser {
  constructor(
    public id: number,
    public login: string,
    public email: string,
    public password: string,
  ) { }
}
