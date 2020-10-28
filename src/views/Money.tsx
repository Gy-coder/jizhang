import {Layout} from '../component/Layout';
import React from 'react';
import {ChooseType} from '../component/Money/chooseType';
import {OutputMoney} from '../component/Money/outputMoney';

const Money:React.FC = ()=> {
  return (
    <Layout>
      <ChooseType />
      <OutputMoney />
      <div>
        <ol>
          <li>吃饭</li>
          <li>医疗</li>
        </ol>
      </div>
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