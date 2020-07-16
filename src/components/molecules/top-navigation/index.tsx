import React, { useState } from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core';

import DropDownValue from '../../atoms/drop-down-value';
import DropUpIcon from '../../atoms/icons/drop-up';
import DropDownIcon from '../../atoms/icons/drop-down';
const useStyles = makeStyles((theme: Theme) => ({
    border1: {
        width: '105px',
        height: '32px',
        borderRadius: '4px',
        border: 'solid 1px rgba(255, 255, 255, 0)',
        textAlign: 'center',
        marginTop: '23px',
        marginBottom: '23px'
    },
    border2: {
        width: '46px',
        height: '32px',
        borderRadius: '4px',
        border: 'solid 1px rgba(255, 255, 255, 0)',
        marginTop: '23px',
        marginBottom: '23px'
    }

    
}));

interface props {
    name: string
    isDropDown: string
    styles: object
}

const DropDownItem: React.FC<props> = ({styles, name, isDropDown}) => {
    const [clicked, setClicked] = useState<Boolean>(false);
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <div className={isDropDown ==="true" ? classes.border1: classes.border2} style={styles}>
            <DropDownValue onclick={handleClick} name={name}></DropDownValue>{isDropDown === "true" ? clicked ? <DropUpIcon setter={handleClick}></DropUpIcon> : <DropDownIcon setter={handleClick}></DropDownIcon> : ''}
        </div>
    )
}
export default DropDownItem;