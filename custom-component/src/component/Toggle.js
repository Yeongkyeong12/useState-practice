import React, { useState } from "react";
import "./Toggle.css";
import styled from "styled-components";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={toggler} />
        <span className="slider" />
      </label>
      <BoldDiv>
        Toggle Switch {toggle ? <Bold>ON</Bold> : <Bold>OFF</Bold>}
      </BoldDiv>
    </div>
  );
}

export default Toggle;

const Bold = styled.span`
  font-weight: bold;
`;

const BoldDiv = styled.div`
  font-weight: bold;
`;
