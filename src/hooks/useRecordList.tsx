import {useEffect, useState} from 'react';
import {recordItemType} from '../lib/recordItemType';
import {useUpdate} from './useUpdate';
import {createID} from '../lib/createID';


const useRecordList = () => {
  const [recordList, setRecordList] = useState<recordItemType[]>([]);
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
    const finalRecord = {...newRecord, createAt: new Date().toISOString(),id:createID()};
    setRecordList([...recordList, finalRecord]);
    return true;
  };
  return {recordList, setRecordList, addRecordList};
};

export {useRecordList};