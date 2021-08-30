import { Layout } from "../component/Layout";
import React, { useEffect, useState } from "react";
import { ChooseType } from "../component/Common/ChooseType";
import { OutputMoney } from "../component/Money/OutputMoney";
import { Tags } from "../component/Money/Tags";
import { Notes } from "../component/Money/Notes";
import { NumberPad } from "../component/Money/NumberPad";
import { useRecordItem } from "../hooks/useRecordItem";
import { useRecordList } from "../hooks/useRecordList";
import styled from "styled-components";

const ChooseTypeWrapper = styled.ol`
  display: flex;
  flex-direction: row;
  background: #e8e8e8;
  justify-content: center;
  > li {
    width: 10%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin: 0 15px;
    position: relative;
    &.select::after {
      content: "";
      background: #333;
      width: 100%;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

const Money: React.FC = () => {
  const { recordItem, setRecordItem } = useRecordItem();
  const { recordList, addRecordList } = useRecordList();
  const [outputMoney, setOutputMoney] = useState<string>(
    recordItem.amount.toString()
  );
  useEffect(() => {
    setRecordItem({ ...recordItem, tag: { id: "others", tagName: "其它" } });
  }, [recordItem.type]);
  return (
    <Layout>
      <ChooseTypeWrapper>
        <ChooseType
          type={recordItem.type}
          onChange={(type) => setRecordItem({ ...recordItem, type: type })}
        />
      </ChooseTypeWrapper>
      <OutputMoney
        amount={outputMoney}
        name={recordItem.tag.id}
        type={recordItem.type}
      />
      <Tags
        type={recordItem.type}
        onChange={(tag) => setRecordItem({ ...recordItem, tag: tag })}
      />
      <Notes
        note={recordItem.note}
        onChange={(note) => setRecordItem({ ...recordItem, note: note })}
      />
      <NumberPad
        amount={recordItem.amount.toString()}
        onChange={(amount) => {
          setOutputMoney(amount);
          setRecordItem({ ...recordItem, amount: parseFloat(amount) });
        }}
        onOk={() => {
          if (addRecordList(recordItem)) {
            window.localStorage.setItem(
              "recordList",
              JSON.stringify(recordList)
            );
            alert("添加成功");
            setOutputMoney("0");
          }
        }}
      />
    </Layout>
  );
};

export { Money };
