import {Layout} from '../component/Layout';
import React from 'react';
import {ChooseType} from '../component/Money/chooseType';
import {OutputMoney} from '../component/Money/outputMoney';
import {Tags} from '../component/Money/tags';
import {Notes} from '../component/Money/notes';
import {NumberPad} from '../component/Money/numberPad';
import {useRecordItem} from '../hooks/useRecordItem';

const Money: React.FC = () => {
  const {recordItem,setRecordItem} = useRecordItem()
  return (
    <Layout>
      {recordItem.type}{recordItem.tag.id}
      <ChooseType type={recordItem.type} onChange={(type)=> setRecordItem({...recordItem,type:type})} />
      <OutputMoney amount={recordItem.amount} name={recordItem.tag.id}/>
      <Tags onChange={(tag)=> setRecordItem({...recordItem,tag:tag})}/>
      <Notes/>
      <NumberPad />
    </Layout>
  );
};


export {Money};