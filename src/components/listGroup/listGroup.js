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
    const {task} = this.props;
    const content = task.map((item) => {
        return (
          <ListItem
            key={item.id}
            id={item.id}
            text={item.content}
            completed={item.status}
          />
        )
      })

    return (
      <ListGroupBlock>
        {content}
      </ListGroupBlock>
    )
  }
}

const mapStateToProps = (state) => {
  return {task: state.taskReduse}
}

export default connect(mapStateToProps)(ListGroup)