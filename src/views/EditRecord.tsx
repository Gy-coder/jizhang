import React from 'react';

import {useParams} from "react-router-dom";
const EditRecord: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  return (
    <div>{id}</div>
  );
};

export {EditRecord};