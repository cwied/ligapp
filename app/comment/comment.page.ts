import {Page, NavParams} from 'ionic-framework/ionic';
import {Comment} from './comment';
import {Task} from '../task/task';

@Page({
    templateUrl: 'build/comment/comment-list.html'
})
export class CommentPage {
    public comments: Comment[];
    public selectedComment: Comment;
    //public currentTask: Task;

    constructor(navParams: NavParams) {
        alert("constructor" + navParams.get("_currentTask").name);
        this.comments = navParams.get("_currentTask").comments;
        //this.comments = this.currentTask.comments;
        //alert("TASK:" + this.currentTask.name);
    }

    onSelect(comment: Comment) { this.selectedComment = comment; }
}
