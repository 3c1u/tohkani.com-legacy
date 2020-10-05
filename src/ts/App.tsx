import * as React from 'react'

import { IconButton, Typography } from '@material-ui/core'
import {
    GitHub as GitHubIcon,
    Twitter as TwitterIcon,
    Book as BlogIcon,
} from '@material-ui/icons'
import kani from '../favicon.svg'
import kaniVomit from '../crab_vomit.svg'

import styles from '../css/App.styl'

const App = (_props: Record<string, unknown>): JSX.Element => {
    const [vomit, setVomit] = React.useState(false)

    return (
        <>
            <div className={styles.root}>
                {/* branding */}
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            setVomit(!vomit)
                        }}
                        className={styles.buttonClear}
                    >
                        <img
                            className={
                                vomit
                                    ? [styles.kani, styles.vomit].join(' ')
                                    : styles.kani
                            }
                            src={vomit ? kaniVomit : kani}
                            width={300}
                            alt="Vomiting crab"
                        />
                    </button>
                </div>
                {/* icon array */}
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
                {/* copyright */}
                <footer>
                    <Typography variant="caption" display="block" gutterBottom>
                        © 2020 Hikaru Terazono (3c1u).
                    </Typography>
                </footer>
            </div>
        </>
    )
}

export default App
