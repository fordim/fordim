import { TagType } from './consts';

export interface TaskType {
  name: string;
  time: number;
  isActive: boolean;
  tagType: TagType;
}

export interface ButtonPlay {
  type: string;
}
