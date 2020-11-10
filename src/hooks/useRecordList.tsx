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
  const changeRecord = (id: string, recordItem: recordItemType, changeAmount: number, changeNote: string) => {
    const unChangeList = recordList.filter(item => item.id !== parseInt(id));
    setRecordList([{...recordItem, amount: changeAmount, note: changeNote}, ...unChangeList]);
  };
  return {recordList, setRecordList, addRecordList, fetchRecord, deleteRecord, changeRecord};
};

export {useRecordList};