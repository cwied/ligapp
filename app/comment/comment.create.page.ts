import {Page, NavParams, NavController} from 'ionic-framework/ionic';
import {Task} from '../task/task';

@Page({
    template: `
  <ion-navbar *navbar>
    <ion-title>
        Add Item
    </ion-title>
    <ion-buttons end>
        <button (click)="save()">Save</button>
    </ion-buttons>
</ion-navbar>

<ion-content>
    <ion-list>
      <ion-input floating-label>
        <ion-label>Title</ion-label>
        <input type="text" [(ngModel)]="text" />
      </ion-input>
    </ion-list>
</ion-content>

`
})
export class CommentCreatePage {
    public text: string;
    public currentTask: Task;

    constructor(private _nav: NavController, navParams: NavParams) {
        this.text = "";
        this.currentTask = navParams.get("_currentTask");
    }

    save(){
        let newComment = {
            id: 0,
            text: this.text,
            done: false
        };

        this.currentTask.comments.push(newComment);
        this._nav.pop();

    }

}