import React, { useState } from "react";
import styled from "styled-components";

const NumberPadWrapper = styled.div`
  > div {
    > button {
      width: 25%;
      height: 64px;
      border: none;
      float: left;
      &.ok {
        float: right;
        height: 128px;
      }
      &.zero {
        width: 50%;
      }
      :nth-child(1) {
        background: #f2f2f2;
      }
      :nth-child(2),
      :nth-child(5) {
        background: #e8e8e8;
      }
      :nth-child(3),
      :nth-child(6),
      :nth-child(9) {
        background: #dedede;
      }
      :nth-child(4),
      :nth-child(7),
      :nth-child(10) {
        background: #d3d3d3;
      }
      :nth-child(8),
      :nth-child(11),
      :nth-child(13) {
        background: #c9c9c9;
      }
      :nth-child(14) {
        background: #bfbfbf;
      }
      :nth-child(12) {
        background: #b5b5b5;
      }
    }
  }
`;
type Props = {
  amount: string;
  onChange: (amount: string) => void;
  onOk: () => void;
};
const NumberPad: React.FC<Props> = (props: Props) => {
  const [price, setPrice] = useState(props.amount);
  const btnClick = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).innerHTML;
    if ("0123456789".indexOf(text) >= 0) {
      if (price === "0") {
        props.onChange(text);
        setPrice(text);
      } else {
        props.onChange(price + text);
        setPrice(price + text);
      }
    }
    if (text === ".") {
      if (price.indexOf(".") < 0) {
        props.onChange(price + text);
        setPrice(price + text);
      }
    }
  };
  const removePrice = () => {
    if (price.length > 1) {
      props.onChange(price.slice(0, -1));
      setPrice(price.slice(0, -1));
    } else if (price.length === 1) {
      props.onChange("0");
      setPrice("0");
    }
  };
  const cleared = () => {
    props.onChange("0");
    setPrice("0");
  };
  const ok = () => {
    props.onOk();
  };
  return (
    <NumberPadWrapper>
      <div className="clear">
        <button onClick={btnClick}>1</button>
        <button onClick={btnClick}>2</button>
        <button onClick={btnClick}>3</button>
        <button onClick={removePrice}>删除</button>
        <button onClick={btnClick}>4</button>
        <button onClick={btnClick}>5</button>
        <button onClick={btnClick}>6</button>
        <button onClick={cleared}>清零</button>
        <button onClick={btnClick}>7</button>
        <button onClick={btnClick}>8</button>
        <button onClick={btnClick}>9</button>
        <button className="ok" onClick={ok}>
          OK
        </button>
        <button onClick={btnClick} className="zero">
          0
        </button>
        <button onClick={btnClick}>.</button>
      </div>
    </NumberPadWrapper>
  );
};

export { NumberPad };
