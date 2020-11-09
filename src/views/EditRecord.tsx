import React, {useState} from 'react';

import {useParams} from 'react-router-dom';
import {Layout} from '../component/Layout';
import {HeadEdit} from '../component/Edit/HeadEdit';
import {NoteEdit} from '../component/Edit/NotesEdit';
import {ButtonsEdit} from '../component/Edit/ButtonsEdit';
import {useRecordList} from '../hooks/useRecordList';

const EditRecord: React.FC = () => {
  const {id} = useParams<{ id: string }>();
  const {fetchRecord, recordList, setRecordList, deleteRecord} = useRecordList();
  const recordItem = fetchRecord(parseInt(id));

  const RecordItemContent = () => {
    const [changeAmount, setChangeAmount] = useState(recordItem.amount);
    const [changeNote, setChangeNote] = useState(recordItem.note);
    return (
      <>
        {changeAmount}{changeNote}
        <HeadEdit tag={recordItem.tag}/>
        <NoteEdit title='金额' content={changeAmount.toString()}
                  onChange={(amount) => {
                    if(amount.length === 0) return setChangeAmount(0)
                    setChangeAmount(parseFloat(amount));
                  }}/>
        <NoteEdit title='备注' content={changeNote}
                  onChange={(note) => {
                    setChangeNote(note);
                  }}/>
        <ButtonsEdit
          onChange={() => {
            const unChangeList = recordList.filter(item => item.id !== parseInt(id));
            setRecordList([...unChangeList, {...recordItem, amount: changeAmount, note: changeNote}]);
          }}
          onDelete={() => {
            deleteRecord(parseInt(id));
          }}
        />
      </>
    );
  };
  return (
    <Layout>
      {recordItem ? RecordItemContent() : <>{'record不存在'}</>}
    </Layout>
  );
};

export {EditRecord};