import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Todo-List';
  tasks = [
    'Visit Ann',
    'Call Dad',
    'go to gym',
    'wash the dishes',
    'shop for the party',
  ];
  add(newTask: string) {
    this.tasks.push(newTask);
  }
  remove(existingTask: string) {
    var userconfirmed = confirm(
      `are you sure you want  to remove the following task? \n "${existingTask}"`
    );
    this.tasks = this.tasks.filter((task) => task != existingTask);
  }
  markAsDone(task: string) {
    alert(`The task:"` + task + `" is done`);
  }
}
