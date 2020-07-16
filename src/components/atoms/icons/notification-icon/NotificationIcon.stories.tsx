 import React from 'react'
import NotificationIcon from './index'
export default {
    component: NotificationIcon,
    title: 'NotificationIcon'
}


export const NotificationIconStoryWithOutNotifications: React.FC = () => {
    return (
        <NotificationIcon ></NotificationIcon>
    )
};

export const NotificationIconStoryWithNotifications: React.FC = () => {
    return (
        <NotificationIcon noOfNotifications={7}></NotificationIcon>
    )
}