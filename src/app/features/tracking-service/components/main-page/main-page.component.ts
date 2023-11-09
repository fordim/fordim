import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'tracking-service-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageTrackingServiceComponent implements OnInit {
  tasks = this._task.tasks;

  constructor(private _task: TaskService) {}

  ngOnInit(): void {}

  actionClicked(event: boolean): void {
    console.log(event);
  }
}
