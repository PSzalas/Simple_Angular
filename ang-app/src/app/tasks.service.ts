import { Injectable } from '@angular/core';
import { ITask } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  public fetch(): ITask[] {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  }

  public update(tasks: ITask[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}


