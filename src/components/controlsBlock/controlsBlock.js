import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import randomId from '../randomId';

const ControlsWrap = styled.form`
  width: 100%;
  flex: 0 0 auto;
`
const InputTask = styled.input`
  min-width: 100%;
  border: 0;
  outline: none;
  border-bottom: 1px solid #000;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 18px;
  color: #000;
  background: none;
  line-height: 1.4em;
`

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 80px;
  padding-left: 80px;
  padding-top: 14px;
  font-size: 16px;
`

const HideButton = styled.button`
  width: 133px;
  background: #FFE482;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 13px 5px;
  cursor: pointer;
  outline: none;
`

const AddButton = styled.button`
  width: 133px;
  background: #FFFFFF;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 13px 5x;
  cursor: pointer;
  outline: none;
`

class Controls extends React.Component {

  onAddTask = (e) => {
    e.preventDefault();
    if(this.refs.content.value !== '') {
      this.props.dispatch({
        type: 'ADD',
        id: randomId(),
        content: this.refs.content.value,
        status: false,
      });
      this.refs.content.value = '';
    }
  }

  onHideCompleted = () => {
    this.props.dispatch({type: 'HIDE_COMPLETED'})
  }

  render() {
    return (
      <ControlsWrap onSubmit={this.onAddTask}>
        <InputTask 
          placeholder='Enter a new todo item'
          ref='content'
        />
        <ButtonsWrap>
          <HideButton 
            type='button' 
            onClick={this.onHideCompleted}
          >
            Hide complited
          </HideButton>
          <AddButton type='submit'>Add new</AddButton>
        </ButtonsWrap>
      </ControlsWrap>
    )
  }
}

const mapStateToProps = (state) => {
  return {task: state.taskReduse}
}

export default connect(mapStateToProps)(Controls)