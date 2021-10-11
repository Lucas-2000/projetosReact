import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Container, IconButton, makeStyles, Typography } from '@material-ui/core'
import { ThumbUpAlt } from '@material-ui/icons'
import React from 'react'
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: 'blue'
    }
})

const Dados = () => {
    const classes = useStyles()

    return (
        <Container>
            <Typography variant="h6" component="h2" gutterBottom>
                Dados do novembro azul
            </Typography>

            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar alt="Novembro Azul" className={classes.avatar}>
                            D
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
                        De todos os tipos de câncer, o de próstata é o de maior incidência (36,9%) entre homens de 18 anos ou mais que descobriram a doença no primeiro diagnóstico, de acordo com a Pesquisa Nacional de Saúde 2013 (PNS), divulgada pelo IBGE. Dados do Ministério da Saúde mostram que, em 2015, 14.484 homens morreram em decorrência da doença no país.
                        <br />
                        É para mudar essa realidade que a campanha Novembro Azul foi criada em 2003, inicialmente na Austrália, e adotada posteriormente em diversos países. No Brasil, ela é apoiada pelo Instituto Nacional de Câncer (Inca), que lançou este ano a cartilha Câncer de Próstata: vamos falar sobre isso?, para dar mais visibilidade para a doença no Dia Nacional de Combate ao Câncer (27/11).
                        <br />
                        Em 2016, foram estimados cerca de 61.200 casos novos de câncer de próstata pelo Inca. Mesmo sendo 3.240 casos a mais que o estimado para o câncer de mama (57.960) no mesmo período, a campanha Novembro Azul ainda não tem a mesma visibilidade e alcance que o Outubro Rosa (de prevenção do câncer de mama).
                        <br />
                        Para prevenir o câncer de próstata, a cartilha recomenda uma alimentação saudável, não fumar e praticar atividades físicas. Ela constata ainda que o risco de desenvolver a doença aumenta em pessoas com sobrepeso/obesidade, com histórico de câncer na família e em idosos. De acordo com a PNS 2013, dos 408 mil casos da doença, 56,2% ocorreram em homens entre 65 e 74 anos.
                        <br />
                        <br />
                        Apenas 25% dos homens com mais de 50 anos fizeram o exame de toque
                        <br />
                        <br />
                        A detecção do câncer de próstata pode ser feita por meio de dois exames: o antígeno prostático específico (PSA) e o toque retal. O primeiro é um exame de sangue que identifica o nível dessa proteína que, quando elevada, pode indicar câncer ou doenças benignas da próstata. O segundo é feito pelo médico, que avalia tamanho, forma e textura da próstata.
                        <br />
                        O preconceito e falta de informação de muitos homens em relação ao exame de toque prejudica a prevenção e aumenta os índices de mortalidade com a doença. Por exemplo, a PNS 2013 mostra que aproximadamente 5,7 milhões de homens de 50 anos ou mais realizaram exame físico ou de toque retal nos 12 meses anteriores à pesquisa, o equivalente a 25% nessa faixa de idade.
                        <br />
                        Em caso de anormalidade no exame físico, a confirmação da doença é feita somente após uma biópsia. O toque retal é indispensável pois, às vezes, o exame de sangue não mostra a doença. De acordo com o chefe de urologia do Inca, doutor Franz Campos, “existem casos em que antígeno prostático específico não se expressa, mesmo em pacientes portadores de câncer da próstata”.
                        <br />
                        Para o médico, é necessário trazer mais conhecimento e informação sobre a doença. “É fundamental o entendimento entre os apoiadores do Novembro Azul e as entidades públicas que coordenam as normas de diagnóstico e tratamento do câncer, além de estreitar os contatos com a imprensa, a fim de chamar atenção para esse grave problema de saúde pública em nosso país”, afirma o doutor Franz Campos.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary" >
                        Compartilhar
                    </Button>
                    <FacebookShareButton
                        url="http://localhost:3000/dados"
                        quote={'Dados sobre o novembro azul'}
                        hashtag="#NovembroAzul"
                    >
                        <FacebookIcon round={true} size={23} />
                    </FacebookShareButton>
                    <WhatsappShareButton
                        url="http://localhost:3000/dados"
                        title="Novembro Azul"
                    >
                        <WhatsappIcon round={true} size={23} />
                    </WhatsappShareButton>
                </CardActions>
            </Card>
        </Container >
    )
}

export default Dados
