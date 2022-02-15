import Toggle from "./component/Toggle";
import styled from "styled-components";
// import React, { useState } from "react";
import "./App.css";
import Modal from "./component/Modal";

function App() {
  return (
    <div>
      <Title>원티드 preonboarding 선발 과제_오영경</Title>
      <Wrapper>
        <h3>1. Toggle</h3>
        <Toggle />
      </Wrapper>
      <Wrapper>
        <h3>2. Modal</h3>
        <Modal />
      </Wrapper>
      <Wrapper>
        <h3>3. Tab</h3>
        {/* <Toggle /> */}
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  width: 350px;
  height: 180px;
  border-radius: 20px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-left: 10px;
  float: left;
`;

const Title = styled.h2`
  margin-left: 15px;
`;
