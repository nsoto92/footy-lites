import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Typography, Card, CardHeader, CardMedia } from '@material-ui/core'
import { StateContext } from '../State';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            width: '100%',
            marginBottom: '150px',
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: '25px',
            margin: 'auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            marginBottom: '150px',
        },

        [theme.breakpoints.up('md')]: {
            marginTop: '25px',
            margin: 'auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginBottom: '100px',
        },

        [theme.breakpoints.up('lg')]: {
            margin: 'auto',
            marginTop: '25px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            marginBottom: '100px'
        },

    },

    card: {
        margin: '15px',
        maxWidth: '350px',
        padding: '5px',
        boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
        overflow: 'visible',
        transition: '0.4s',
        '&:hover': {
            transform: 'translateY(-2px)',
            '& $shadow': {
                bottom: '-1.5rem',
            },
            '& $shadow2': {
                bottom: '-2.5rem',
            },
        },

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    title: {
        textAlign: 'center',
        marginTop: '25px',
        marginBottom: '25px'
    },

}));

export default function Competitions() {
    const { data } = useContext(StateContext)
    const classes = useStyles()


    let newArr = []

    for (var i = 0; i < data.length; i++) {
        if (!newArr.includes(data[i].competition.name)) {
            newArr.push(data[i].competition.name)
        }
    }

    return (
        <div>

            <Typography className={classes.title} variant="h1">
                All Competitions
            </Typography>
            {newArr.sort().map(r => {
                return (
                    <>
                        <Typography style={{ marginLeft: '10px' }} variant="h2">League: {r} </Typography>
                        <hr style={{ color: '#424242' }} />
                        <div className={classes.root}>
                            {data.map(v => {
                                if (v.competition.name === r) {
                                    return (
                                        <Card className={classes.card}>
                                            <Link to={`/${v.title}`}>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={v.thumbnail}
                                                    title={v.title}
                                                />
                                            </Link>
                                            <CardHeader
                                                className={classes.header}
                                                title={v.title}
                                                subheader={v.competition.name} />
                                        </Card>
                                    )
                                }
                            })}
                        </div>
                    </>
                )
            })}
        </div>
    )
}
