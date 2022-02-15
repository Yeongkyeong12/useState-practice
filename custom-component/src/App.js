import Toggle from "./component/Toggle";
import styled from "styled-components";
import Tab from "./component/Tab";
import "./App.css";
import Modal from "./component/Modal";

function App() {
  return (
    <div>
      <Title>원티드 preonboarding 선발 과제_오영경</Title>
      <Wrapper>
        <SubTitle>1. Toggle</SubTitle>
        <Toggle />
      </Wrapper>
      <Wrapper>
        <SubTitle>2. Modal</SubTitle>
        <Modal />
      </Wrapper>
      <Wrapper>
        <SubTitle>3. Tab</SubTitle>
        <Tab />
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  width: 440px;
  height: 280px;
  border-radius: 20px;
  border: 1px solid #ccc;
  text-align: center;
  padding-top: 15px;
  box-sizing: border-box;
  margin: 10px;
  float: left;
`;

const Title = styled.h2`
  margin-left: 15px;
`;

const SubTitle = styled.h3`
  margin-bottom: 10px;
`;
