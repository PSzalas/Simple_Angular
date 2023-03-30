import { query } from '@angular/animations';
import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ITask, Task } from './task';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  taskInputTxt = '';
  tasks: ITask[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasks = this.tasksService.fetch();
  }

  @HostListener("window:unload")
  update() {
    this.tasksService.update(this.tasks);
  }

  addTask() {
    if (this.taskInputTxt !== "") {
      this.tasks.push(new Task(this.taskInputTxt));
      this.taskInputTxt = "";
    }
  }

  deleteTask(idx: number) {
    this.tasks.splice(idx, 1)
  }

  toggleDone(idx: number) {
    this.tasks[idx].isDone = !this.tasks[idx].isDone;
  }
}
