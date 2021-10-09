import { Button, Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import { KeyboardArrowRight, Send } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

const Criar = () => {
    const classes = useStyles()
    const history = useHistory()
    const [titulo, setTitulo] = useState('')
    const [detalhes, setDetalhes] = useState('')
    const [tituloError, setTituloError] = useState(false)
    const [detalhesError, setDetalhesError] = useState(false)
    const [categoria, setCategoria] = useState('doencas')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTituloError(false)
        setDetalhesError(false)

        if (titulo == '') {
            setTituloError(true)
        }
        if (detalhes == '') {
            setDetalhesError(true)
        }

        if (titulo && detalhes) {
            fetch('http://localhost:8000/posts', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ titulo, detalhes, categoria })
            }).then(() => history.push('/'))
        }
    }

    return (
        <Container>
            <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
                Criar novo Post
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    className={classes.field}
                    onChange={(e) => setTitulo(e.target.value)}
                    label="Título do post"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={tituloError}
                />
                <TextField
                    className={classes.field}
                    onChange={(e) => setDetalhes(e.target.value)}
                    label="Detalhes"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detalhesError}
                />

                <FormControl className={classes.field}>
                    <FormLabel>Categoria</FormLabel>
                    <RadioGroup value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <FormControlLabel value="doenças" control={<Radio />} label="Doenças" />
                        <FormControlLabel value="dicas" control={<Radio />} label="Dicas" />
                        <FormControlLabel value="prevenção" control={<Radio />} label="Prevenção" />
                    </RadioGroup>
                </FormControl>

                <Button type="submit" color="secondary" variant="contained"
                    endIcon={<KeyboardArrowRight />}>Enviar</Button>

            </form>
        </Container>
    )
}

export default Criar
