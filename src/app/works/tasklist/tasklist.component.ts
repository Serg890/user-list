import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  userText: string;
  users: Array<ITask> = [];
  editIndex: number;
  userEdit: string;
  hideBox: boolean;
  check: boolean;
  checkbox: boolean;
  counter: number;
  disable: boolean;

  constructor() { }

  ngOnInit() {
  }

  changeStatus(task: ITask): void {
    task.check = !task.check;

  }
  addUser(): void {
    // tslint:disable-next-line: no-use-before-declare
    const newTask: ITask = new User(1, this.userText, this.check);
    if (this.userText) {
      if (this.users.length > 0) {
        newTask.id = this.users.slice(-1)[0].id + 1;
      }
    }
    this.users.push(newTask);
    console.log(this.users);
    this.userText = '';
    this.counter = this.users.length;
  }
  delete(index: number): void {
    this.users.splice(index, 1);
    this.counter = this.users.length;
  }
  edit(i: number): void {
    this.userEdit = this.users[i].task;
    this.check = false;
    this.editIndex = i;
    this.hideBox = true;
    this.checkbox = true;
    this.disable = true;
  }
  save(): void {
    this.users[this.editIndex].task = this.userEdit;
    this.userEdit = '';
    this.hideBox = false;
    this.checkbox = false;
    this.check = true;
    this.disable = false;
  }
}
interface ITask {
  id: number;
  task: string;
  check: boolean;

}
class User implements ITask {
  constructor(
    public id: number,
    public task: string,
    public check: boolean
  ) { }
}
