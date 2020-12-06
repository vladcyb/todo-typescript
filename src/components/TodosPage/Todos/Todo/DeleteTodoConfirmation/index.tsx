import { FC } from 'react'
import { Box, IconButton, Popper } from '@material-ui/core'
import './s.scss'
import { Clear, Done } from '@material-ui/icons'


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
          <IconButton size="small" onClick={onDelete}>
            <Done className="DeleteTodoConfirmation__yes" fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={onClose}>
            <Clear className="DeleteTodoConfirmation__no" fontSize="small" />
          </IconButton>
        </div>
      </Box>
    </Popper>
  )
}

export default DeleteTodoConfirmation
