import React, { Children, useState } from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Container, FormControl, IconButton, InputLabel, makeStyles, MenuItem, Select, Typography } from '@material-ui/core'
import { ThumbUpAlt } from '@material-ui/icons'
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

const useStyles = makeStyles({
    select: {
        width: '300px',
        marginTop: 20,
        marginBottom: 20
    },
    avatar: {
        backgroundColor: 'blue'
    }
})

const Doencas = () => {
    const classes = useStyles()

    const [value, setValue] = useState('')
    const handleChange = e => setValue(e.target.value)

    const cardInfo = [
        {
            value: '1',
            title: 'Cancer de prostata',
            text: <text>
                É um tumor maligno que surge na próstata. A doença chega a atingir em torno de 16% dos homens e a sua frequência aumenta com a idade
                <br />
                <br />
                Sintomas
                <br />
                <br />
                Muitos pacientes não apresentam nenhum sintoma ou, quando apresentam, são semelhantes aos do crescimento benigno da próstata (HPB )
                <br />
                <br />
                Tratamento
                <br />
                <br />
                Quando diagnosticado nas fases iniciais, a cirurgia ou a radioterapia podem curar o câncer da próstata. Em fases mais avançadas, o câncer pode ser neutralizado com o bloqueio da ação da testosterona. O hormônio é responsável pela “alimentação” da próstata
            </text>
        },
        {
            value: '2',
            title: 'Prostatite',
            text: <text>
                É uma inflamação na próstata que chega a atingir quase 30% dos homens.
                <br />
                <br />
                Sintomas
                <br />
                <br />
                Esta doença geralmente é assintomática, mas quando dá sintomas, os mais frequentes são: ardor ou queimação ou um desconforto junto ao orgasmo, esperma de cor amarelada, vontade frequente de urinar
                <br />
                <br />
                Tratamento
                <br />
                <br />
                O tratamento é feito com antibiótico e por um período mais longo do que os tratamentos habituais
            </text>
        },
        {
            value: '3',
            title: 'HPB',
            text: <text>
                O tumor benigno é mais frequente quanto maior for a idade do paciente e chega a atingir quase 70% dos homens acima de 70 anos. A doença se caracteriza por um aumento da próstata apenas no local
                <br />
                <br />
                Sintomas
                <br />
                <br />
                O aumento benigno da próstata passa a ser um problema quando ela dificulta a passagem da urina. Por isso, os homens podem apresentar vontade de urinar várias vezes durante a noite, aumento da frequência de idas ao banheiro durante o dia, demora para iniciar a micção, diminuição da força e do calibre do jato urinário e sensação de urgência para urinar e às vezes até perda de urina nessas situações
                <br />
                <br />
                Tratamento
                <br />
                <br />
                Pode ser clínico com o uso de remédios que melhoram os sintomas que a obstrução produz na uretra ou medicamentos que bloqueiam o crescimento da próstata. A cirurgia da HPB é recomendada quando o tratamento clínico não é efetivo ou quando a obstrução já é muito intensa
            </text>
        }
    ]

    const renderCard = (card, index) => {
        if (value == card.value) {
            return (

                <Card elevation={1} key={index}>
                    <CardHeader
                        avatar={
                            <Avatar alt={card.title} className={classes.avatar}>
                                {card.title[0].toUpperCase()}
                            </Avatar>
                        }
                        action={
                            <IconButton>
                                <ThumbUpAlt color="secondary" />
                            </IconButton>
                        }
                        title={card.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            {card.text}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="secondary">
                            Compartilhar
                        </Button>
                        <FacebookShareButton
                            url="http://localhost:3000/doencas"
                            quote={'Doenças referentes ao novembro azul'}
                            hashtag="#NovembroAzul"
                        >
                            <FacebookIcon round={true} size={23} />
                        </FacebookShareButton>
                        <WhatsappShareButton
                            url="http://localhost:3000/doencas"
                            title="Novembro Azul"
                        >
                            <WhatsappIcon round={true} size={23} />
                        </WhatsappShareButton>
                    </CardActions>
                </Card>

            )
        }
    }

    return (
        <Container>
            <Typography variant="h6" component="h2" gutterBottom>
                Saiba mais sobre as doenças referentes ao novembro azul...
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
                Selecione abaixo
            </Typography>
            <FormControl>
                <InputLabel shrink>Doenças</InputLabel>
                <Select onChange={handleChange} variant="outlined" color="secondary" className={classes.select}>
                    <MenuItem value={'1'}>Cancer de prostata</MenuItem>
                    <MenuItem value={'2'}>Prostatite</MenuItem>
                    <MenuItem value={'3'}>HPB</MenuItem>
                </Select>
            </FormControl>

            {cardInfo.map(renderCard)}
        </Container>
    )
}

export default Doencas
