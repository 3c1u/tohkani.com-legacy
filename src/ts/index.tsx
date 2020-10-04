/// <reference path='./global.d.ts'/>

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import kani from '../favicon.svg'
import kani_vomit from '../crab_vomit.svg'

import {
    GitHub as GitHubIcon,
    Twitter as TwitterIcon,
    Book as BlogIcon,
} from '@material-ui/icons'
import { IconButton, Typography } from '@material-ui/core'

const App = (props: {}) => {
    const [vomit, setVomit] = React.useState(false);

    return (<>
        <div className="root">
            <div>
                <img className={vomit ? "kani vomit" : "kani"}
                     src={vomit ? kani_vomit : kani}
                     width={300} 
                     onClick={() => {
                    setVomit(!vomit)
                }}/>
                
            </div>
            <style>{`
            div.root {
                text-align: center;
            }
            .kani.vomit {
                animation: gerogero 0.2s infinite linear;
            }

            @keyframes gerogero {
                0% { transform: translate(0px, 0px); }
                25% { transform: translate(-10px, 0px); }
                75% { transform: translate(10px, 0px); }
                100% { transform: translate(0px, 0px); }
            }
            `}</style>
            <div>
                <IconButton href="https://github.com/3c1u">
                    <GitHubIcon />
                </IconButton>
                <IconButton href="https://twitter.com/murueka_misw">
                    <TwitterIcon />
                </IconButton>
                <IconButton href="https://3c1u.tohkani.xyz/">
                    <BlogIcon />
                </IconButton>
            </div>
            <footer>
                <Typography variant="caption" display="block" gutterBottom>
                    © 2020 Hikaru Terazono (3c1u)
                </Typography>
            </footer>
        </div>
    </>)
}

ReactDOM.render((
    <App />
), document.getElementById('app'))
