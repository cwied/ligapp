import {Page, NavController} from 'ionic-framework/ionic';
import {OnInit} from 'angular2/core';
import {Task} from './task';
import {TaskService} from './task.service';
import {CommentPage} from '../comment/comment.page';

@Page({
  template: `<ion-content padding>
  <h2>{{title}}</h2>
  <ion-list>
    <ion-item *ngFor="#task of tasks" (click)="onSelect(task)">
      <span>{{task.id}}</span> {{task.name}}
    </ion-item>
  </ion-list>
</ion-content>
`,
  providers: [TaskService]
})
export class TaskPage {
  public title = 'LIG Tasks';
  public tasks: Task[];
  constructor(private _taskService: TaskService, private _nav: NavController) {

  }

  getTasks() {
    this.tasks = this._taskService.getTasks();
  }
  ngOnInit() {
    this.getTasks();
  }
  onSelect(task: Task) { this._nav.push(CommentPage, { _currentTask: task }); }
}
