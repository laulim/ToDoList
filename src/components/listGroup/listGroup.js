import React from 'react';
import styled from 'styled-components';
import ListItem from '../listItem/listItem';
import {connect} from 'react-redux';


const ListGroupBlock = styled.div`
  flex: 1 1 auto;
  margin-bottom: 20px;
`

class ListGroup extends React.Component {

  render() {
    const {task, hidden} = this.props;
    let content = null;

    if (hidden) {
      content = task.map((item) => {
        if(!item.status) {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              text={item.content}
              completed={item.status}
            />
          )
        }
        return false;
      }) 
    } else {
      content = task.map((item) => {
        return (
          <ListItem
            key={item.id}
            id={item.id}
            text={item.content}
            completed={item.status}
          />
        )
      })
    }

    return (
      <ListGroupBlock>
        {content}
      </ListGroupBlock>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    task: state.taskReduse,
    hidden: state.toggleCompleted
  }
}

export default connect(mapStateToProps)(ListGroup)