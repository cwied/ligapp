import {TASKS} from './mock-tasks';
import {Injectable} from 'angular2/core';

@Injectable()
export class TaskService {
    getTasks() {
        return TASKS;
    }
}