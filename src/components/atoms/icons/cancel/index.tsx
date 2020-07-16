import React from 'react';
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { images } from '../../../../context'

const useStyles = makeStyles((theme: Theme) => ({
    img: {
        width: '14px',
        height: '14px',
        cursor: 'pointer',
    },
    border: {
        width: '20px',
        height: '20px',
        cursor: 'pointer',
        display: 'inline'
    }
}));

type props = {
    onclick?: () => void
};

const CancelIcon: React.FC<props> = ({onclick}) => {
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    const cancelimage = images('./close-24-px_2020-07-16/close-24-px.png').default
    console.log("Cnacel image "+cancelimage)
    return (
        <div onClick={onclick} className={classes.border}>
            <img src={cancelimage} alt="Error loading..."></img>
        </div>
    )
}
export default CancelIcon;