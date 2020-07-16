import React from 'react'
import { makeStyles, Theme, useTheme} from '@material-ui/core'
const useStyles = makeStyles((theme: Theme) => ({
    border: {
        width: '74px',
        height: '24px',
        fontFamily: 'Roboto',
        fontSize: '16px',
        marginTop: '24px',
        marginBottom: '22px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: 'normal',
        color: '#3e3f42',
        fontWeight: 500

       
    }
}));

const AppName: React.FC = () => {
    const theme = useTheme<Theme>()
    const classes = useStyles(theme)
    return (
        <p data-test-id="appname" className={classes.border}>Z-Athena</p>
    )
}
export default AppName