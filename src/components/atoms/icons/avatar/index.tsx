import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import {images} from '../../../../context'

const useStyles = makeStyles((theme: Theme) => ({
    border: {
        fontSize: '14px',
        fontFamily: 'roboto',
        objectFit: 'contain'
    },
    img: {
        width: 'inherit',
        height: 'inherit',
        borderRadius: '50%',
    }
}));

type props = {
    styles : object
}

const Avatar: React.FC<props> = ({styles}) => {
    const theme = useTheme<Theme>();
    const classes = useStyles(theme)
    const avatar = images('./newton.jpeg').default
    return (
        <div className={classes.border}>
            <img style={styles} className={classes.img} src={avatar} alt="Error loading"></img>
        </div>
    )
}

export default Avatar