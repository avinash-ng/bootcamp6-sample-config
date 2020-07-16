import React, { useState } from 'react'
import { Grid, useTheme, Theme, makeStyles, Container } from '@material-ui/core'
import DropDownIcon from '../../atoms/icons/drop-down';
import DropUpIcon from '../../atoms/icons/drop-up';
import DropDownItem from '../../molecules/top-navigation';
import DropDownValue from '../../atoms/drop-down-value';
import SearchBar from '../../molecules/searchbar';
import NotificationIcon from '../../atoms/icons/notification-icon';
import AppLogo from '../../atoms/icons/logo';
import Avatar from '../../atoms/icons/avatar';
import AppName from '../../atoms/app-name';
import VerticalDivider from '../../atoms/divider/vertical';
const useStyles = makeStyles((theme: Theme) => ({
    grid: {
        width: '1480px',
        height: '70px',
        border: 'solid 1px red',
        // alignItems: 'center'
        fontSize: '14px',
        fontFamily: 'roboto',
        color: '#3e3f42',
        // gridTemplateColumns: '206px 480 480px'

    },
    logo: {
        width: '31px',
        height: '24px',
        objectFit: 'contain',
        marginLeft: '18px'
    },
    container2: {
        paddingLeft: '35px',
       
    },

    // appName: {
    //     width: '74px',
    //     height: '24px',
    //     fontfamily: 'Roboto',
    //     fontsize: '16px',
    //     fontweight: '500',
    //     fontstretch: 'normal',
    //     fontStyle: 'normal',
    //     lineHeight: '1.5',
    //     letterSpacing: 'normal',
    //     color: '#3e3f42'
    // }


}));
const NavBar: React.FC = () => {
    const theme = useTheme<Theme>();
    const [clickedDiscover, setClickedDiscover] = useState<Boolean>(false);
    const [clickedLibrary, setClickedLibrary] = useState<Boolean>(false);
    const classes = useStyles(theme);

    const handleDiscoverState = () => {
        setClickedDiscover(!clickedDiscover);
    }

    const handleMyLibararyState = () => {
        setClickedLibrary(!clickedLibrary)
    }
    return (
            <Grid container alignContent="flex-start" className={classes.grid} direction="column" >
                <Grid item >
                    <Grid container >
                        <Grid item >
                            <AppLogo styles={{marginRight: '17px'}}></AppLogo>
                        </Grid>
                        <Grid item>
                           <AppName></AppName>
                        </Grid>
                        <Grid item>
                            <VerticalDivider styles={{marginTop:'16px', marginBottom:'16px', marginLeft: '27px', marginRight: '39px'}}></VerticalDivider>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item  >
                    <Grid container direction="row" >
                        <Grid item >
                        <DropDownItem styles={{marginRight: '17px'}}name="Home" isDropDown="false"></DropDownItem>
                        </Grid>
                        <Grid item >
                        <DropDownItem styles={{ marginRight: '17px' }} name="Discover" isDropDown="true" ></DropDownItem>
                        </Grid>
                        <Grid item >
                        <DropDownItem styles={{ marginRight: '17px' }} name="My Library" isDropDown="true"></DropDownItem>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item  > 
                    <Grid container>
                        <Grid item>
                            <SearchBar styles={{marginLeft: '350px', marginTop: '16px',marginBottom: '16px'}}></SearchBar>
                        </Grid>
                        <Grid item>
                            <NotificationIcon noOfNotifications={0}></NotificationIcon>
                        </Grid>
                        <Grid item>
                            <Avatar styles={{  marginLeft: '35px',marginTop: '16px',marginBottom: '17px',width: '37px',height: '37px'}}></Avatar>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
    )
}
export default NavBar