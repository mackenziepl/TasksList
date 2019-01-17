import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';
import { HttpService } from './http.service';

@Injectable()
export class TasksService {

  /** private tasksList: Array<Task> = []; */
  /** private tasksDone: Array<Task> = []; */

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  /** private tasksDoneObs = new BehaviorSubject<Array<Task>>([]); */

  constructor(private httpService: HttpService) {
    this.httpService.getTasks().subscribe(list => {
      this.tasksListObs.next(list);
    });
    /** const tasksList = [
      {name: 'test_task1', created: new Date().toLocaleString(), isDone: false},
      {name: 'test_task2', created: new Date().toLocaleString(), isDone: false},
      {name: 'test_task3', created: new Date().toLocaleString(), isDone: false},
      {name: 'test_task4', created: new Date().toLocaleString(), isDone: false}];
    this.tasksListObs.next(tasksList); */
  }

  add(task: Task) {
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
    /** this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList); */
  }

  delete(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
    /** this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList); */
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
      /** this.tasksDone.push(task);
      this.delete(task);
      this.tasksDoneObs.next(this.tasksDone); */
  }

  getTasksListObs(): Observable<Array<Task>> {
      return this.tasksListObs.asObservable();
  }

  /** getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  } */

  saveTasksInDb() {
    this.httpService.saveTasks(this.tasksListObs.getValue());
  }
}
