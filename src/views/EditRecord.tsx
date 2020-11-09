import React, {useState} from 'react';

import {useParams} from 'react-router-dom';
import {Layout} from '../component/Layout';
import {HeadEdit} from '../component/Edit/HeadEdit';
import {NoteEdit} from '../component/Edit/NotesEdit';
import {ButtonsEdit} from '../component/Edit/ButtonsEdit';
import {useRecordList} from '../hooks/useRecordList';

const EditRecord: React.FC = () => {
  const {id} = useParams<{ id: string }>();
  const {fetchRecord, setRecordList, deleteRecord} = useRecordList();
  const recordItem = fetchRecord(parseInt(id));
  let changeAmount = 0;
  let changeNote = '';
  if (recordItem) {
    changeAmount = recordItem.amount;
    changeNote = recordItem.note;
  }
  console.log(changeAmount);
  const recordItemContent = () => {
    return (
      <>
        {changeAmount}{changeNote}
        <HeadEdit tag={recordItem.tag}/>
        <NoteEdit title='金额' content={changeAmount.toString()}
                  onChange={(amount) => {
                    changeAmount = parseFloat(amount);
                    console.log(changeAmount);
                  }}/>
        <NoteEdit title='备注' content={changeNote} onChange={(note) => {changeNote = note;}}/>
        <ButtonsEdit onChange={() => {}}
                     onDelete={() => {
                       deleteRecord(parseInt(id));
                     }}
        />
      </>
    );
  };
  return (
    <Layout>
      {recordItem ? recordItemContent() : <>{'record不存在'}</>}
    </Layout>
  );
};

export {EditRecord};