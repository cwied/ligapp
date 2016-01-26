import {Task} from './task';
import {Comment} from "../comment/comment";
export var comment: Comment[] = [{"id":1, "done":false, "text":"blup"}];
export var TASKS: Task[] = [
    {"id": 1, "name": "Tracking", "person": "cwied", "checks": "myCheck", "comments":comment},
    {"id": 2, "name": "Monitoring", "person": "cortes", "checks": "myCheck", "comments":comment},
    {"id": 3, "name": "Service Generation", "person": "cwied", "checks": "myCheck", "comments":comment}
];
