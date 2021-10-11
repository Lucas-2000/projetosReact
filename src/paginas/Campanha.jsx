import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Container, IconButton, makeStyles, Typography } from '@material-ui/core'
import { ThumbUpAlt } from '@material-ui/icons'
import React from 'react'
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: 'blue'
    }
})

const Campanha = () => {
    const classes = useStyles()

    return (
        <Container>
            <Typography variant="h6" component="h2" gutterBottom>
                Campanha do novembro azul
            </Typography>

            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar alt="Novembro Azul" className={classes.avatar}>
                            N
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <ThumbUpAlt color="secondary" />
                        </IconButton>
                    }
                    title="Novembro Azul"
                    subheader="Mês mundial de combate ao câncer de próstata"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        O câncer de próstata, tipo mais comum entre os homens, é a causa de morte de 28,6% da população masculina que desenvolve neoplasias malignas.No Brasil, um homem morre a cada 38 minutos devido ao câncer de próstata, segundo os dados mais recentes do Instituto Nacional do Câncer (Inca).
                        < br />
                        < br />
                        O que é a próstata?
                        < br />
                        É uma glândula do sistema reprodutor masculino, que pesa cerca de 20 gramas, e se assemelha a uma castanha.Ela localiza-se abaixo da bexiga e sua principal função, juntamente com as vesículas seminais, é produzir o esperma.
                        < br />
                        < br />
                        Sintomas:
                        < br />
                        Na fase inicial, o câncer de próstata não apresenta sintomas e quando alguns sinais começam a aparecer, cerca de 95% dos tumores já estão em fase avançada, dificultando a cura.Na fase avançada, os sintomas são:
                        < br />
                        • dor óssea;
                        < br />
                        • dores ao urinar;
                        < br />
                        • vontade de urinar com frequência;
                        < br />
                        • presença de sangue na urina e/ou no sêmen.
                        < br />
                        < br />
                        Fatores de risco:
                        < br />
                        • histórico familiar de câncer de próstata: pai, irmão e tio;
                        • raça: homens negros sofrem maior incidência deste tipo de câncer;
                        • obesidade.
                        < br />
                        < br />
                        Prevenção e tratamento:
                        < br />
                        A única forma de garantir a cura do câncer de próstata é o diagnóstico precoce.Mesmo na ausência de sintomas, homens a partir dos 45 anos com fatores de risco, ou 50 anos sem estes fatores, devem ir ao urologista para conversar sobre o exame de toque retal, que permite ao médico avaliar alterações da glândula, como endurecimento e presença de nódulos suspeitos, e sobre o exame de sangue PSA (antígeno prostático específico).Cerca de 20% dos pacientes com câncer de próstata são diagnosticados somente pela alteração no toque retal.Outros exames poderão ser solicitados se houver suspeita de câncer de próstata, como as biópsias, que retiram fragmentos da próstata para análise, guiadas pelo ultrassom transretal.
                        < br />
                        A indicação da melhor forma de tratamento vai depender de vários aspectos, como estado de saúde atual, estadiamento da doença e expectativa de vida.Em casos de tumores de baixa agressividade há a opção da vigilância ativa, na qual periodicamente se faz um monitoramento da evolução da doença intervindo se houver progressão da mesma.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary">
                        Compartilhar
                    </Button>
                    <FacebookShareButton
                            url="http://localhost:3000/campanha"
                            quote={'Campanha do novembro azul'}
                            hashtag="#NovembroAzul"
                        >
                            <FacebookIcon round={true} size={23} />
                        </FacebookShareButton>
                        <WhatsappShareButton
                            url="http://localhost:3000/campanha"
                            title="Novembro Azul"
                        >
                            <WhatsappIcon round={true} size={23} />
                        </WhatsappShareButton>
                </CardActions>
            </Card>
        </Container>
    )
}

export default Campanha
