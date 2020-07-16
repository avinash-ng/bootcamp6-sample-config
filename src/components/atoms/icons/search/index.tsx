import React from 'react'
import { makeStyles, Theme, useTheme } from '@material-ui/core'
import { images } from '../../../../context';
const useStyles = makeStyles((theme: Theme) => ({
    search_24px: {
        width: '15px',
        height: '15px',
        objectFit: 'contain'
    },
    border: {
        width: '21px',
        height: '20px',
        marginTop: '12px',
        marginBottom: '11px'
    }

}));
const SearchIcon: React.FC = () => {
    const theme = useTheme<Theme>()
    const classes = useStyles(theme)
    const searchimage = images('./search-24-px_2020-07-15/search-24-px.png').default;
    return (
        <div className={classes.border}>
            <img src={searchimage} alt="Error loading..." className={classes.search_24px}></img>
        </div>
    )
}
export default SearchIcon