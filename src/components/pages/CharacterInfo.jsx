import React, { Component } from 'react'
import LevelSelector from '../dnd/LevelSelector'
import BasicTextFields from '../dnd/BasicTextFields'
import DropdownSelector from '../dnd/DropdownSelector'

import Grid from '@mui/material/Unstable_Grid2'
import TextField from '@mui/material/TextField'

class CharacterInfo extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={0.1}>
          <Grid xs={10}>
            <BasicTextFields label="Nome"/>
          </Grid>
          <Grid xs={2}>
            <LevelSelector label="Nível"/>
          </Grid>
        </Grid>

        <Grid container spacing={0.1}>
          <Grid xs={6}>
            <DropdownSelector label="Raça" values={['Anão', 'Elfo', 'Humano', 'Pequenino']}/>
          </Grid>
          <Grid xs={6}>
            <DropdownSelector label="Classe" values={['Guerreiro', 'Bardo']}/>
          </Grid>
        </Grid>

        <Grid container spacing={0.1}>
          <Grid xs={6}>
            <DropdownSelector label="Alinhamento"
                              values={['Ordeiro e bom', 'Neutro e bom', 'Caótico e bom', 'Ordeiro e neutro', 'Neutro', 'Caótico e neutro', 'Ordeiro e mau', 'Neutro e mau', 'Caótico e mau']}/>
          </Grid>
          <Grid xs={6}>
            <DropdownSelector label="Antecedente" values={['Acólito', 'Artista', 'Criminoso', 'Sábio', 'Soldado']}/>
          </Grid>
        </Grid>

        <div>
          <img src="https://assets.playgroundai.com/30f33bdf-df20-48f8-9420-a67fbf4e5b64.jpg" style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '10px',
            marginTop: '5px',
            marginBottom: '5px'
          }}/>
        </div>

        <div>
          <TextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            fullWidth
          />
        </div>
      </div>
    )
  }
}

export default CharacterInfo