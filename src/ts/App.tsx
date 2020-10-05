import * as React from 'react'

import kani from '../favicon.svg'
import kani_vomit from '../crab_vomit.svg'

import styles from '../css/App.styl'

import { IconButton, Typography } from '@material-ui/core'

import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Book as BlogIcon,
} from '@material-ui/icons'

export default (props: {}) => {
  const [vomit, setVomit] = React.useState(false)

  return (
    <>
      <div className={styles.root}>
        {/* branding */}
        <div>
          <img
            className={
              vomit ? [styles.kani, styles.vomit].join(' ') : styles.kani
            }
            src={vomit ? kani_vomit : kani}
            width={300}
            onClick={() => {
              setVomit(!vomit)
            }}
          />
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
