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
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('doencas')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title == '') {
            setTitleError(true)
        }
        if (details == '') {
            setDetailsError(true)
        }

        if (title && details) {
            fetch('http://localhost:8000/posts', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ title, details, category })
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
                    onChange={(e) => setTitle(e.target.value)}
                    label="Título do post"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    error={titleError}
                />
                <TextField
                    className={classes.field}
                    onChange={(e) => setDetails(e.target.value)}
                    label="Detalhes"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                />

                <FormControl className={classes.field}>
                    <FormLabel>Categoria</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
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
