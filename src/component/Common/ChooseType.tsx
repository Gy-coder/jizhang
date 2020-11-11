import React from 'react';
import styled from 'styled-components';



type Props = {
  type: ('-' | '+')
  onChange: (type: ('-' | '+')) => void
}
const ChooseType: React.FC<Props> = (props: Props) => {
  return (
    <>
      <li className={props.type === '-' ? 'select' : ''}
          onClick={() => props.onChange('-')}
      >支出
      </li>
      <li className={props.type === '+' ? 'select' : ''}
          onClick={() => props.onChange('+')}
      >收入
      </li>
    </>
  );
};


export {ChooseType};