import React from "react";

import { MenuItem } from "../../components/menu-item/menu-item.component";

import './homepage.styles.scss';

export const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <MenuItem title="HATS" subtitle="SHOP NOW" />
                <MenuItem title="JACKETS" subtitle="SHOP NOW" />
                <MenuItem title="SNEAKERS" subtitle="SHOP NOW" />
                <MenuItem title="WOMENS" subtitle="SHOP NOW" />
                <MenuItem title="MENS" subtitle="SHOP NOW" />
            </div>
        </div>
    )
}