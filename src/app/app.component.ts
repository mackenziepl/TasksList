import { Component } from '@angular/core';
import { TasksService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  constructor(private taskService: TasksService) {}

  save() {
    this.taskService.saveTasksInDb();
  }
}
