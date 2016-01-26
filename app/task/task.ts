import {Comment} from "../comment/comment";
export interface Task {
    id: number;
    name: string;
    person: string;
    checks: string;
    comments: Comment[];
}