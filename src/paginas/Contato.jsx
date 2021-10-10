import { Button, Container, makeStyles, TextField, Typography } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import React, { useState } from 'react'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

const Contato = () => {
    const classes = useStyles()
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [nomeError, setNomeError] = useState(false)
    const [sobrenomeError, setSobrenomeError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [telefoneError, setTelefoneError] = useState(false)
    const [mensagemError, setMensagemError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setNomeError(false)
        setSobrenomeError(false)
        setEmailError(false)
        setTelefoneError(false)
        setMensagemError(false)

        if (nome == '') {
            setNomeError(true)
            
        }
        if (sobrenome == '') {
            setSobrenomeError(true)
        }
        if (email == '') {
            setEmailError(true)
        }
        if (telefone == '') {
            setTelefoneError(true)
        }
        if (mensagem == '') {
            setMensagemError(true)
        }
    }


    return (
        <Container>
            <Typography gutterBottom variant="h6" component="h2">
                Fale conosco
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
                Deixe sua mensagem e nosso time dará uma resposta em ate 48 horas
            </Typography>

            <form noValidate autoComplete="off"  onSubmit={handleSubmit}>
                <TextField label="Primeiro nome"
                    placeholder="Digite seu nome"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    className={classes.field}
                    onChange={(e) => setNome(e.target.value)}
                    error={nomeError}
                />

                <TextField label="Sobrenome"
                    placeholder="Digite seu sobrenome"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    className={classes.field}
                    onChange={(e) => setSobrenome(e.target.value)}
                    error={sobrenomeError}
                />

                <TextField label="Email"
                    type="email"
                    placeholder="Digite seu email"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    className={classes.field}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                />

                <TextField label="Telefone"
                    type="number"
                    placeholder="Digite seu telefone"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    className={classes.field}
                    onChange={(e) => setTelefone(e.target.value)}
                    error={telefoneError}
                />

                <TextField label="Mensagem"
                    type="message"
                    placeholder="Digite sua mensagem"
                    multiline
                    rows={4}
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    className={classes.field}
                    onChange={(e) => setMensagem(e.target.value)}
                    error={mensagemError}
                />

                <Button type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRight />}>
                    Enviar
                </Button>


            </form>

        </Container>
    )
}

export default Contato
