import {tagItemType} from './tagItemType';

export type recordItemType = {
  id?:number,
  tag:tagItemType,
  type:('-' | '+')
  amount:number,
  note:string,
  createAt?:string
}