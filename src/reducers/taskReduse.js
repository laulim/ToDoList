import tasks from './tasksBD';

const taskReduse = (state = tasks, action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat({
        id: action.id,
        content: action.content,
        status: false
      });
    
    case 'SET_COMPLETED':
      const arrSet = state.slice();
      const index = arrSet.findIndex((item) => item.id === action.id);
      const completed = arrSet[index].status;
      arrSet[index].status = !completed;
      return arrSet;
    
    case 'HIDE_COMPLETED':
      const arrHide = state.slice();
      const clearArr = arrHide.filter((item) => item.status === false);
      return clearArr;
    
    default: 
      return state;
  }
}

export default taskReduse