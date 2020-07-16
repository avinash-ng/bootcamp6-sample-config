import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import {images} from '../../../../context'
const useStyles = makeStyles((theme: Theme) => ({
    app_icon: {
        width: '31px',
        height: '24px',
        objectFit: 'contain'
    },
    border: {
        marginTop: '23px',
        marginLeft: '23px'
    }
}));


type props = {
    styles ?: object
}
const AppLogo: React.FC<props> = ({styles}) => {
    const theme = useTheme<Theme>();
    const classes = useStyles(theme)
    const appimage = images('./logo_2020-07-15/logo.png').default
    
    return (
        <div className={classes.border} style={styles}>
            <img src={appimage} className={classes.app_icon}  />
        </div>
    )
}
export default AppLogo