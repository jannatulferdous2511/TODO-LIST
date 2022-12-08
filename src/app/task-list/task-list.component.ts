import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  tasks: Task[] = [
    new Task('Visit Ann'),
    new Task('Call Dad'),
    new Task('go to gym'),
    new Task('wash the dishes'),
    new Task('shop for the party'),
  ];
  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }
  remove(existingTask: Task) {
    var userConfirmed = confirm(
      `are you sure you want  to remove the following task? \n "${existingTask.title}"`
    );
    if (userConfirmed) {
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }
}
class Task {
  constructor(public title: string) {}
  toggleIsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
