import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, TextField, Theme } from '@material-ui/core'
import { useState } from 'react'
import Loader from '../loader/Loader'
import { createUser } from '../../services/users/api'

export interface SimpleDialogProps {
  open: boolean
  onClose: (value: boolean) => void
  data?: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > .MuiDialogContent-root': {
        display: 'flex',
        gap: '15px',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column'
        }
      },
    },
  }),
)

export default function CreateUser(props: SimpleDialogProps) {
  const classes = useStyles()
  const { onClose, open } = props

  const [newsForm, setNewsForm] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleClose = (res: boolean) => {
    setNewsForm({})
    onClose(res)
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    createUser(newsForm)
    .then(res => {
      if(res.data.status) handleClose(true)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setNewsForm({ ...newsForm, content: 'teste', [name]: value })
  }
  
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} maxWidth="sm" fullWidth={true}>
      <DialogTitle id="simple-dialog-title">Adicionar</DialogTitle>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <DialogContent>
          <TextField id="title" name="title" label="Título" variant="filled" fullWidth={true} value={newsForm.title} onChange={handleInputChange} />
          <TextField id="author" name="author" label="Autor" variant="filled" fullWidth={true} value={newsForm.author} onChange={handleInputChange} />
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" disableElevation color="primary" disabled={isLoading}>
            {isLoading ? <Loader size={23} /> : 'Salvar'}
          </Button>
          <Button onClick={() => handleClose(false)}>Fechar</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}