import {tagItemType} from './tagItemType';

export type recordItemType = {
  tag:tagItemType,
  type:('-' | '+')
  amount:number,
  note:string,
  createAt?:string
}