import {Icon} from '../Icon';
import React from 'react';


const RecordDetail:React.FC = ()=>{
  return (
    <div>
      <Icon name='others' />
      <span>其它</span>
      <span>
        <span>$0</span>
        <span>12月1日 12:00</span>
      </span>
    </div>
  )
}

export {RecordDetail}