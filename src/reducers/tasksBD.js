import randomId from '../components/randomId';

const tasks = [
  {
    id: randomId(),
    content: 'Learn React',
    status: true
  },
  {
    id: randomId(),
    content: 'Redux is awesome',
    status: false
  }
]

export default tasks