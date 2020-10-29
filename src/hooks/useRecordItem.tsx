import {useState} from 'react';
import {recordItemType} from '../lib/recordItemType';


const useRecordItem = ()=>{
  const [recordItem,setRecordItem] = useState<recordItemType>(
    {tag:{id:'others',tagName:'其他'},type:'-',amount:0,note:''}
  )
  return {recordItem,setRecordItem}
}

export {useRecordItem}