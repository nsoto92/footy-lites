import { createMuiTheme } from '@material-ui/core/styles'

const theme1 = createMuiTheme({
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        h1: {
            fontSize: '2rem', // 36px
        },
        h2: {
            fontSize: '1.25rem', // 20px
        },
        h3: {
            fontSize: '1.125rem', // 18px
        },
        h4: {
            fontSize: '1rem', // 16px
        },
        body1: {
            // for paragraph typography
            fontSize: '.675rem',
        },
    },

    palette: {
        primary: {
            main: '#DC143C', // crimson
        },

        text: {
            primary: '#f5f5f5', // off-white
            secondary: '#000000',
        },
        background: {
            default: '#282727',
            light: '#424242',
            dark: '#141414',
            white: '#ffffff',
            offWhite: '#f5f5f5',
        },
    },
    overrides: {
        MuiCardHeader: {
            title: {
                fontSize: '1.25rem',
                textAlign: 'center',
                color: '#000000'
            },
            subheader: {
                fontSize: '.7 rem',
                textAlign: 'center',
            }
        }
    }
})

export default theme1