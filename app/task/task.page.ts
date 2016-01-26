import {Page} from 'ionic-framework/ionic';
import {Component, OnInit} from 'angular2/core';
import {Task} from './task';
import {TaskService} from './task.service';

@Page({
  templateUrl: 'build/task/task-list.html',
  providers: [TaskService]
})
export class TaskPage {
  public title = 'LIG Tasks';
  public tasks: Task[];
  public selectedTask: Task;
  constructor(private _taskService: TaskService) { }
  getTasks() {
    this.tasks = this._taskService.getTasks();
  }
  ngOnInit() {
    this.getTasks();
  }
  onSelect(task: Task) { this.selectedTask = task; alert("Selected");}
}
