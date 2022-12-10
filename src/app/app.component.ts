import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  completedtask: any = []
  taskAllComplete: boolean = false;

  constructor() {};

  ngOnChanges(): void {

  }

  todolist = [
    {
      id : 1,
      label: "Morning Walk",
      complete : false,
    },
    {
      id : 2,
      label: "Leran Japanese",
      complete : false,
    },
    {
      id : 3,
      label: "Morning Lecture",
      complete : false,
    },
    {
      id : 4,
      label: "Coding",
      complete : false,
    },
    {
      id : 5,
      label: "Night Lecture",
      complete : false,
    },
    {
      id : 6,
      label: "Onii Chan Baka",
      complete : false,
    },
  ]

  completeTask(id: number) {
    const task = this.todolist.filter(todo => todo.id === id)[0];
    task.complete = !task.complete;
    // this.completedtask = [];
    let taskCompleteLists = this.todolist.filter(todo => todo.complete)
    this.todolist.forEach((val, i) => {
      if(val.complete == true) {
        this.completedtask.push(val, id)
      }
    })
    if(this.todolist.length == taskCompleteLists.length) {
      this.taskAllComplete = true;
    } else {
      this.taskAllComplete = false;
    }
  }
}
