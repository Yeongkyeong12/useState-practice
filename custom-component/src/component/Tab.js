import React, { useState } from "react";
import "./Tab.css";
import styled from "styled-components";

function Tab() {
  const [toggleNum, setToggleNum] = useState(1);

  const toggleTab = (index) => {
    setToggleNum(index);
  };

  return (
    <Wrapper>
      <TabWrapper>
        <button
          className={toggleNum === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleNum === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleNum === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </TabWrapper>

      <ContentWrapper>
        <div
          className={toggleNum === 1 ? "content  active-content" : "content"}
        >
          <p>Tab menu ONE</p>
        </div>

        <div
          className={toggleNum === 2 ? "content  active-content" : "content"}
        >
          <p>Tab menu TWO</p>
        </div>

        <div
          className={toggleNum === 3 ? "content  active-content" : "content"}
        >
          <p>Tab menu THREE</p>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 220px;
  background: #f1f1f1;
  margin: 0 auto;
  border-radius: 12px;
`;

const TabWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

export default Tab;
