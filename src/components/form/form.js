import React, { useState } from 'react'

import {
  Button,
  FormControl,
  FormControlLabel,
  Switch,
  TextField,
} from '@material-ui/core'

import { cpfIsValid } from '../../utils'

const Form = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [promotions, setPromotions] = useState(false)
  const [news, setNews] = useState(false)
  const [error, setError] = useState({
    cpf: { isValid: true, message: '' },
  })

  const handleCreate = (e) => {
    e.preventDefault()
  }

  return (
    <FormControl fullWidth>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        fullWidth
        id="standard-basic"
        autoComplete="off"
        label="Nome"
      />

      <TextField
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        margin="normal"
        fullWidth
        id="standard-basic"
        autoComplete="off"
        label="Sobrnome"
      />

      <TextField
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        onBlur={(e) => setError(cpfIsValid(cpf))}
        error={!error.cpf.isValid}
        helperText={error.cpf.message}
        margin="normal"
        fullWidth
        id="standard-basic"
        autoComplete="off"
        label="CPF"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            value={promotions}
            onChange={(e) => setPromotions(e.target.checked)}
            checked={promotions}
            name="promocoes"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            value={news}
            onChange={(e) => setNews(e.target.checked)}
            checked={news}
            name="novidades"
          />
        }
      />
      <Button
        onClick={handleCreate}
        style={{ marginTop: '2em' }}
        variant="contained"
        color="primary"
      >
        Cadastrar
      </Button>
    </FormControl>
  )
}

export default Form
