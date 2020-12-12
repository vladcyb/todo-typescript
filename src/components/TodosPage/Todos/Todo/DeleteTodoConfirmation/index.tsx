import { FC } from 'react'
import { Box, Button, Popper } from '@material-ui/core'
import './s.scss'


type T = {
  onDelete: () => void
  onClose: () => void
  anchor: null | HTMLElement
}

const DeleteTodoConfirmation: FC<T> = (props) => {

  /* props */
  const { onDelete, onClose, anchor } = props

  return (
    <Popper
      className="DeleteTodoConfirmation"
      open={Boolean(anchor)}
      anchorEl={anchor}
      placement="top"
    >
      <Box p={1}>
        <div className="DeleteTodoConfirmation__title">Delete?</div>
        <div className="DeleteTodoConfirmation__buttons">
          <Button size="small" onClick={onDelete} color="secondary">
            Yes
          </Button>
          <Button size="small" onClick={onClose} color="primary">
            No
          </Button>
        </div>
      </Box>
    </Popper>
  )
}

export default DeleteTodoConfirmation
