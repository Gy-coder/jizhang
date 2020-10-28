import {Layout} from '../component/Layout';
import React from 'react';
import {ChooseType} from '../component/Money/chooseType';
import {OutputMoney} from '../component/Money/outputMoney';
import {Tags} from '../component/Money/tags';
import {Notes} from '../component/Money/notes';

const Money: React.FC = () => {
  return (
    <Layout>
      <ChooseType/>
      <OutputMoney/>
      <Tags/>
      <Notes/>
      <div className="numberPad">
        numberPad
      </div>
    </Layout>
  );
};


export {Money};