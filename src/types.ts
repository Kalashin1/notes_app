import {RecordModel} from 'pocketbase'

export interface Note extends RecordModel {
  id: string;
  contents: string;
  title: string;
  status: "PENDING" | "CREATED" | "ARCHIVED" | "DELETED" | "DRAFTED"
  isDeleted: boolean
}