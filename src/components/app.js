import React from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducer from './reducer'

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
`


export default class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <ToDoWrapper>
          <h1>Here will be ToDoList!</h1>
        </ToDoWrapper>
      </AppWrapper>
    )
  }
}