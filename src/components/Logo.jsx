import React from 'react'
import { makeStyles, Toolbar } from '@material-ui/core'
import logo from '../assets/logo.png'

const useStyles = makeStyles({
    logo: {
        maxWidth: 150,
    },
    cont: {
        flexGrow: 1,
        marginTop: '5px',
        marginBottom: '5px'
    },
})

function Logo() {
    const classes = useStyles()

    return (
        <Toolbar className={classes.cont}>
            <img
                src={logo}
                alt="logo"
                className={classes.logo}
            />
        </Toolbar>
    )
}

export default Logo