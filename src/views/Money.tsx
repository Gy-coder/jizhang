import {Layout} from '../component/Layout';
import React from 'react';
import {ChooseType} from '../component/Money/chooseType';


const Money:React.FC = ()=> {
  return (
    <Layout>
      <ChooseType />
      <div>
        <span>@</span>
        <span>$100</span>
      </div>
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