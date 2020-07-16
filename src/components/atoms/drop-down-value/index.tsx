import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
type props = {
    name: string
    onclick: () => void
}
const useStyles = makeStyles((theme: Theme) => ({
    border: {
        width: '63px',
        height: '22px',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.57',
        letterSpacing: 'normal',
        color: '#3e3f42',
        display: 'inline',
        textDecoration: 'none',
        cursor: 'pointer'
    }
}))
const DropDownValue: React.FC<props> = ({ name, onclick }) => {
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    return (
        <a  onClick={onclick} className={classes.border}>{name}</a>
    )
}
export default DropDownValue;