import React from 'react';

import {useParams} from "react-router-dom";
import {Layout} from '../component/Layout';
import {HeadEdit} from '../component/Edit/HeadEdit';
import {NoteEdit} from '../component/Edit/NotesEdit';
import {ButtonsEdit} from '../component/Edit/ButtonsEdit';
const EditRecord: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  console.log(id);
  return (
    <Layout>
      <HeadEdit />
      <NoteEdit/>
      <NoteEdit/>
      <ButtonsEdit />
    </Layout>
  );
};

export {EditRecord};