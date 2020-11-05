import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {TagItem} from './TagItem';
import {tagItemType} from '../../lib/tagItemType';
import {incomeTagData} from '../../lib/incomeTagData';
import {expenseTagData} from '../../lib/expenseTagData';


const TagsWrapper = styled.div`
  background: #ffffff;
  display:flex;
  flex-direction: row;
  align-content: flex-start;
  padding: 16px;  
  flex-wrap: wrap;
  flex-grow: 1;
  padding-left: 35px;
  font-size: 10px;
`;

type Props = {
  type: ('-' | '+')
  onChange: (tag: tagItemType) => void
}
const Tags: React.FC<Props> = (props: Props) => {
  const [tagsData, setTagsData] = useState<tagItemType[]>([]);
  useEffect(() => {
    props.type === '-' ? setTagsData(incomeTagData) : setTagsData(expenseTagData);
  }, [props.type]);
  return (
    <TagsWrapper>
      {tagsData.map(item => {
        return (
          <TagItem key={item.id}
                   tagName={item.tagName}
                   id={item.id}
                   onChange={(tag) => props.onChange(tag)}/>
        );
      })}
    </TagsWrapper>
  );
};

export {Tags};