import React from 'react';
import styled from 'styled-components';
import Controls from './controlsBlock/controlsBlock';
import ListGroup from './listGroup/listGroup';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100%;
  padding-top: 150px;
  padding-bottom: 200px;
  background: linear-gradient(180deg, #CA94FF 0%, rgba(70, 6, 134, 0.81) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ToDoWrapper = styled.div`
  width: 650px;
  min-height: 300px;
  background: rgba(255, 255, 255, 0.67);
  border-radius: 8px;
  padding: 25px 50px 13px;
  display: flex;
  flex-direction: column;
`


export default class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <ToDoWrapper>
          <ListGroup/>
          <Controls/>
        </ToDoWrapper>
      </AppWrapper>
    )
  }
}