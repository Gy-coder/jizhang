import {Layout} from '../component/Layout';
import React from 'react';
import {ChooseType} from '../component/Money/chooseType';
import {OutputMoney} from '../component/Money/outputMoney';
import {Tags} from '../component/Money/tags';

const Money:React.FC = ()=> {
  return (
    <Layout>
      <ChooseType />
      <OutputMoney />
      <Tags />
      <div className='note'>
        <span>备注</span>
        <label>
          <input />
        </label>
      </div>
      <div className="numberPad">
        numberPad
      </div>
    </Layout>
  );
}



export {Money}