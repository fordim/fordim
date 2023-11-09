import { Injectable } from '@angular/core';
import { TaskType } from '../constants/interface';
import { TagType } from '../constants/consts';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: TaskType[] = [];

  constructor() {
    this.addTestTasks();
  }

  addTestTasks(): void {
    this.tasks.push({
      name: 'SL-20',
      time: 50,
      isActive: false,
      tagType: TagType.jira,
    });
    this.tasks.push({
      name: 'SL-300',
      time: 600,
      isActive: false,
      tagType: TagType.jira,
    });
    this.tasks.push({
      name: 'Daily',
      time: 120,
      isActive: false,
      tagType: TagType.talks,
    });
    this.tasks.push({
      name: 'Emails',
      time: 110,
      isActive: false,
      tagType: TagType.other,
    });
    this.tasks.push({
      name: 'Angular',
      time: 100,
      isActive: false,
      tagType: TagType.edu,
    });
  }

  createNewTask(name: string, tagType: TagType): void {
    this.tasks.push({ name: name, time: 0, isActive: false, tagType: tagType });
  }
}
