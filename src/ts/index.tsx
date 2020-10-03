/// <reference path='./global.d.ts'/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import kani from '../favicon.svg'

const App = (props: {}) => {
    return (<>
        <div style={{
            textAlign: "center",
        }}>
            <div>
                <img src={kani} width={300}/>
            </div>
            
        </div>
    </>)
}

ReactDOM.render((
    <App />
), document.getElementById('app'))
