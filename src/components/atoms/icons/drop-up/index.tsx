import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import  { images } from '../../../../context'
const useStyles = makeStyles((theme: Theme) => ({
    drop_up: {
        width: '10px',
        height: '5px',
        objectFit: 'contain',
        cursor: 'pointer'
    },
    border: {
        width: '21px',
        height: '20px',
        display: 'inline-block'
    }
}));

type props = {
    setter: () => void
}

const DropUpIcon: React.FC<props> = ({ setter }) => {
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    const dropupimage = images('./arrow-down-up-24-px_2020-7-15/arrow-drop-up-24-px.png').default;
    const clicked = () => {
        setter()
    }
    return (
        <div className={classes.border}>
            <img src={dropupimage} className={classes.drop_up} onClick={clicked} />
        </div>
    )
}
export default DropUpIcon