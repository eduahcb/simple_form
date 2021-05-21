import React from 'react'
import { Container, Grid } from '@material-ui/core'

import { Form } from './components/form'

function App() {
  return (
    <Container maxWidth="lg">
      <Grid style={{ marginTop: '3em' }} container justify="center">
        <Grid item xs={5}>
          <Grid container justify="center">
            <Form />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
