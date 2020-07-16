import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => ({
    vbar: {
        width: '1px',
        height: '38px',
        backgroundColor: 'gray'
    }
}));

type props = {
    styles?: object
}
const VerticalDivider: React.FC<props> = ({styles}) => {
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    return (
        <div data-test-id="vertical-bar" style={styles} className={classes.vbar}></div>
    )
}
export default VerticalDivider