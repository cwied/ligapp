import {Page, NavParams, NavController} from 'ionic-framework/ionic';
import {Comment} from './comment';
import {Task} from '../task/task';
import {CommentCreatePage} from "./comment.create.page";
import {TaskService} from "../task/task.service";

@Page({
    template: `
    <ion-navbar *navbar>
        <ion-title>
            {{currentTask.name}} Comments
        </ion-title>
        <ion-buttons end>
            <button (click)="addComment(currentTask)">Add</button>
        </ion-buttons>
    </ion-navbar>

    <ion-content padding>
        <ion-list no-lines>
            <ion-item *ngFor="#comment of comments" (click)="onSelect(comment)">
                <ion-checkbox ng-checked="{{comment.done}}">
                    {{comment.text}}
                </ion-checkbox>
            </ion-item>
        </ion-list>
</ion-content>
`
})
export class CommentPage {
    public comments: Comment[];
    public selectedComment: Comment;
    public currentTask: Task;

    constructor(navParams: NavParams, private _nav: NavController) {
        var currentTask = navParams.get("_currentTask");
        this.comments = currentTask.comments;
        this.currentTask = currentTask;
    }

    onSelect(comment: Comment) { this.selectedComment = comment; }

    addComment(task: Task) {
        this._nav.push(CommentCreatePage, { _currentTask: task });
    }
}
