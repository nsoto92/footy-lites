import React from 'react'
import { makeStyles, Grid, Link, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        position: 'fixed',
        width: '100%',
        bottom: 0
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        color: theme.palette.text.primary,
    },

    footerLinks: {
        display: 'flex',
        '& p': {
            margin: '0',
            marginTop: '25px',
            marginLeft: '25px',
            marginRight: '25px',
            // fontSize: '1px',
        },
        '& a': {
            color: theme.palette.text.primary,
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    copyright: {
        padding: '1rem',
    },
}))

function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.root}>
            <Grid className={classes.container}>
                <Grid className={classes.footerLinks}>
                    <p>
                        <Link href="/">Home</Link>
                    </p>
                    <p>
                        <Link href="/comps">Competitions</Link>
                    </p>
                </Grid>
            </Grid>

            <Typography
                variant="body1"
                align="center"
                className={classes.copyright}
            >
                Thanks for using Footy Lites!
         </Typography>
        </footer>
    )
}

export default Footer