import React from "react";

import { MenuItem } from "../menu-item/menu-item.component";

import "./directory.styles.scss";

export const Directory = ({ menuItems }) => {
    return (
        <div className="directory-menu">
            {menuItems.map( ({ id, imageUrl, title, size }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            ))};
        </div>
    )
}