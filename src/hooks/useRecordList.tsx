import {useEffect, useState} from 'react';
import {recordItemType} from '../lib/recordItemType';
import {useUpdate} from './useUpdate';
import {createID} from '../lib/createID';


const useRecordList = () => {
  const [recordList, setRecordList] = useState<recordItemType[]>(JSON.parse(window.localStorage.getItem('recordList') || '[]'));
  useEffect(() => {
    setRecordList(JSON.parse(window.localStorage.getItem('recordList') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('recordList', JSON.stringify(recordList));
  }, [recordList]);
  const addRecordList = (newRecord: recordItemType) => {
    if (newRecord.amount === 0) {
      alert('请输入金额');
      return false;
    }
    const finalRecord = {...newRecord, createAt: new Date().toISOString(), id: createID()};
    setRecordList([...recordList, finalRecord]);
    return true;
  };
  const fetchRecord = (id: number) => {
    return recordList.filter((item) => item.id === id)[0];
  };
  const deleteRecord = (id: number) => {
    setRecordList(recordList.filter(item => item.id !== id));
  };
  const findIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < recordList.length; i++) {
      if (recordList[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const changeRecord = (id: number, recordItem: recordItemType, changeAmount: number, changeNote: string) => {
    const index = findIndex(id)
    if(index >= 0){
      const beforeRecordItem = recordList.slice(0,index)
      const afterRecordItem = recordList.slice(index+1,recordList.length)
      setRecordList([...beforeRecordItem,{...recordItem,amount:changeAmount,note:changeNote},...afterRecordItem]);
    }
  };
  return {recordList, setRecordList, addRecordList, fetchRecord, deleteRecord, changeRecord};
};

export {useRecordList};