import Todos from './Todos'
import todos from '../../assets/todos.json'
import CennterColumn from '../../ui/components/CenterColumn'


function TodosPage() {
  return (
    <CennterColumn>
      <Todos todos={todos} />
    </CennterColumn>
  )
}

export default TodosPage
