import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/db_taskslist/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'DSFTUjQQm0yogudegKjMgNC9X4cyLub4');

  constructor(private http: HttpClient) {
    this.getTasks();
   }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, {params: this.param});
  }

  saveTasks(list: Array<Task>) {
    this.http.put(this.URL_DB, list, {params: this.param}).subscribe();
  }

  /** saveTasks(list: Array<Task>) {
    this.http.post(this.URL_DB, list, {params: this.param}).subscribe(l => {
      console.log(l);
    });
  } */
}
