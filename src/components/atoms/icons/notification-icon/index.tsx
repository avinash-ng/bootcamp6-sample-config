import React from 'react'
import { makeStyles, Theme, useTheme, IconButton, Badge } from '@material-ui/core'
import { images } from '../../../../context';
// import image  from '../../../../assets/notifications-none-24-px_2020-07-15/notifications-none-24-px.png'
const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        width: '16px',
        height: '20px',
        objectFit: 'contain'
    },
    border: {
        width: '24px',
        height: '24px',
        marginLeft: '36px',
        marginTop: '14px',
    }

}))
type props = {
    noOfNotifications?: number
}
const NotificationIcon: React.FC<props> = ({noOfNotifications=11}) => {
    const theme = useTheme<Theme>();
    const classes = useStyles(theme);
    const image = images('./notifications-none-24-px_2020-07-15/notifications-none-24-px.png').default
    console.log(image)
    // const image = images('./notifications-none-24-px.png').default
   
    return (
        <div className={classes.border}>
            {/* <img src={require('../../../../assets/notifications-none-24-px_2020-07-15/notifications-none-24-px.png')} className={classes.icon}></img> */}
            <IconButton aria-label="show 17 new notifications" color="inherit">
                {noOfNotifications > 0 ? <Badge badgeContent={noOfNotifications} color="secondary">
                    <img src={image} className={classes.icon}></img>
                </Badge> : <img src={image} className={classes.icon}></img>}
            </IconButton>
        </div>
    )
}
export default NotificationIcon