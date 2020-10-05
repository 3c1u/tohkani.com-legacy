/// <reference path='./global.d.ts'/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { teal, pink } from '@material-ui/core/colors'
import { CssBaseline } from '@material-ui/core'

import App from './App'

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: teal,
        secondary: pink,
    },
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('app'),
)
