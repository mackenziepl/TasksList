import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  tasksList: Array<string> = [];
  @Output()
  emitDelete = new EventEmitter<string>();
  @Output()
  emitDone = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  delete(task: string) {
    this.emitDelete.emit(task);
  }

  done(task: string) {
    this.emitDone.emit(task);
  }

}
