import React, { useState } from 'react'
import {makeStyles, Theme, useTheme} from '@material-ui/core'
import SearchIcon from '../../atoms/icons/search';
import CancelIcon from '../../atoms/icons/cancel';
const useStyles = makeStyles((theme: Theme) => ({
    border: {
        width: '400px',
        height: '38px',
        borderRadius: '4px',
        border: 'solid 1px black',
        fontSize: '14px',
        fontFamily: 'roboto',
    },
    icon: {
        marginLeft: '10px',
        alignItems: 'center',
        display: 'inline-block',
    },
    input: {
        width: '340px',
        height: '20px',
        border: 1,
        outline: 'none',
        focus: 'none',
        marginBottom: '8px',
        justifyContent: 'center',
        verticalAlign: 'middle', 
       
    }

}));


type props = {
    styles? : object
}
const SearchBar: React.FC<props> = ({styles}) => {
   
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    const [searchInput, setSearchInput] = useState<string>('');
    const handleChange = (e: any) => {
       setSearchInput(e.target.value)
    }
    const resetSearchInput = () => {
        setSearchInput('')
    }
    return (
        <div className={classes.border} style={styles}>
            <form>
                <div className={classes.icon}>
                    <SearchIcon></SearchIcon>
                </div>
                <input type="text" value={searchInput} onChange={handleChange} data-test-id="search-input" className={classes.input} placeholder="search here by book title author or ISBN"></input>
                {searchInput && <div style={{ display: 'inline' }}>
                    <CancelIcon onclick={resetSearchInput}></CancelIcon>
                </div>
                }
                
                
            </form>
            
       </div>
    )
}
export default SearchBar;