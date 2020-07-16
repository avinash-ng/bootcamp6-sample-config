import DropDownItem from "."
import React from "react"
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
export default  {
    component: DropDownItem,
    title: 'DropDownItem',
    decorators: [withKnobs]
}
export const DropDownItemStory: React.FC = () => {
    const name=text("name", "My Library")
    return (
        <DropDownItem isDropDown="true" name={name}></DropDownItem>
    )
}