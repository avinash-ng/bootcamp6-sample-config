import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import {images} from '../../../../context'
const useStyles = makeStyles((theme: Theme) => ({
    drop_down: {
        width: '10px',
        height: '5px',
        objectFit: 'contain',
        cursor: 'pointer'
    },
    border: {
        width: '21px',
        height: '20px',
        display: 'inline-block',
    }
    
}));

type props = {
    setter: () => void,
}

const DropDownIcon: React.FC<props> = ({setter}) => {
    const theme = useTheme<Theme>();
    const classes = useStyles(theme)
    const dropdownimage = images('./arrow-drop-down-24-px_2020-07-15/arrow-drop-down-24-px.png').default
    const clicked = () => {
        setter()
    }
    return (
        <div className={classes.border}>
            <img  src={dropdownimage} className={classes.drop_down} onClick={clicked} />
        </div>
    )
}
export default DropDownIcon