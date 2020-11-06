import {Layout} from '../component/Layout';
import React, {useEffect} from 'react';
import {ChooseType} from '../component/Money/ChooseType';
import {OutputMoney} from '../component/Money/OutputMoney';
import {Tags} from '../component/Money/Tags';
import {Notes} from '../component/Money/Notes';
import {NumberPad} from '../component/Money/NumberPad';
import {useRecordItem} from '../hooks/useRecordItem';
import {useRecordList} from '../hooks/useRecordList';

const Money: React.FC = () => {
  const {recordItem, setRecordItem} = useRecordItem();
  const {recordList, addRecordList} = useRecordList();
  useEffect(() => {
    setRecordItem({...recordItem, tag: {id: 'others', tagName: '其它'}});
  }, [recordItem.type]);
  return (
    <Layout>
      <ChooseType type={recordItem.type}
                  onChange={(type) => setRecordItem({...recordItem, type: type})}
      />
      <OutputMoney amount={recordItem.amount}
                   name={recordItem.tag.id}
                   type={recordItem.type}
      />
      <Tags type={recordItem.type}
            onChange={(tag) => setRecordItem({...recordItem, tag: tag})}
      />
      <Notes note={recordItem.note}
             onChange={(note) => setRecordItem({...recordItem, note: note})}
      />
      <NumberPad amount={recordItem.amount.toString()}
                 onChange={(amount) => setRecordItem({...recordItem, amount: parseFloat(amount)})}
                 onOk={() => {
                   if (addRecordList(recordItem)) {
                     alert('添加成功');
                     window.localStorage.setItem('recordList', JSON.stringify(recordList));
                   }
                 }}
      />
    </Layout>
  );
};


export {Money};