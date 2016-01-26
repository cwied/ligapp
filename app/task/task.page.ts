import {Page, NavController} from 'ionic-framework/ionic';
import {OnInit} from 'angular2/core';
import {Task} from './task';
import {TaskService} from './task.service';
import {CommentPage} from '../comment/comment.page';

@Page({
  templateUrl: 'build/task/task-list.html',
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
  onSelect(task: Task) { alert(task.comments); this._nav.push(CommentPage, { _currentTask: task }); }
}
