import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'tracking-service-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private _task: TaskService) {}

  ngOnInit(): void {}

  addNewTask(form: NgForm): void {
    if (form.valid === false) {
      return;
    }

    console.log(form.value.tag);

    this._task.createNewTask(form.value.name, form.value.tag);
  }

  openCalendar(): void {
    window.open(
      'https://jira.skyeng.tech/plugins/servlet/wtc-iframe?urlPath=workcalendar&decorator=atl.general',
      '_blank'
    );
  }

  openBoard(): void {
    window.open(
      'https://jira.skyeng.tech/secure/RapidBoard.jspa?rapidView=2482',
      '_blank'
    );
  }
}
