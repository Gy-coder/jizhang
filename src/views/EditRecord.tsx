import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Layout} from '../component/Layout';
import {HeadEdit} from '../component/Edit/HeadEdit';
import {NoteEdit} from '../component/Edit/NotesEdit';
import {ButtonsEdit} from '../component/Edit/ButtonsEdit';
import {useRecordList} from '../hooks/useRecordList';
import {Notes} from '../component/Money/Notes';

const EditRecord: React.FC = () => {
  const {id} = useParams<{ id: string }>();
  const {fetchRecord, deleteRecord, changeRecord} = useRecordList();
  const recordItem = fetchRecord(parseInt(id));

  const RecordItemContent: React.FC = () => {
    const [changeAmount, setChangeAmount] = useState(recordItem.amount);
    const [changeNote, setChangeNote] = useState(recordItem.note);
    return (
      <>
        <HeadEdit tag={recordItem.tag}/>
        <NoteEdit title='金额' content={changeAmount.toString()}
                  onChange={(amount) => {
                    if (amount.length === 0) return setChangeAmount(0);
                    setChangeAmount(parseFloat(amount));
                  }}/>
        <NoteEdit title='备注' content={changeNote}
                  onChange={(note) => {
                    setChangeNote(note);
                  }}/>
        <ButtonsEdit
          onChange={() => {
            changeRecord(parseInt(id), recordItem, changeAmount, changeNote);
            window.alert('修改成功');
          }}
          onDelete={() => {
            deleteRecord(parseInt(id));
            window.alert('删除成功');
          }}
        />
      </>
    );
  };
  return (
    <Layout>
      {recordItem ? <RecordItemContent></RecordItemContent> : <>{'record不存在'}</>}
    </Layout>
  );
};

export {EditRecord};