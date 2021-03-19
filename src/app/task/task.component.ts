import { Component, OnInit } from '@angular/core';
import { Task } from './../models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
}) 
export class TaskComponent implements OnInit {

  listTask: Task[] = [];
  nameTask = '';

  constructor() { }

  ngOnInit() {
  }

  addTask(){

    const task: Task = {
      name: this.nameTask,
      status: true
    }
    this.listTask.push(task);
    this.nameTask = '';

  }

  deleteTask(idTask: number): void {
    this.listTask.splice(idTask, 1);
  }

  updateTask(task: Task, index: number){
    this.listTask[index].status = !task.status;
  }

}
