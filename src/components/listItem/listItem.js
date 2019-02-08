import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const ListItemBlock = styled.div`
  position: relative;
  font-size: 24px;
  padding-bottom: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? 'rgba(0, 0, 0, 0.6);' : '#000'};
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    height: 1px;
    width: 60px;
    background: rgba(0, 0, 0, 0.5);
  }
`


class ListItem extends React.Component {

  onToggle = () => {
    const id = this.props.id;
    this.props.dispatch({type: 'SET_COMPLETED', id})
  }
  
  render() {
    const {completed, text, id} = this.props;
    return (
      <ListItemBlock
        id={id}
        completed={completed}
        onClick={this.onToggle}
      >
        {text}
      </ListItemBlock>
    )
  }
}

export default connect() (ListItem)