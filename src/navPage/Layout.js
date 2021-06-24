import React, { Component, useState } from 'react';

export default function Layout(props) {
    const [selectedIndex, setSelectedIndx] = useState(0);
    const { navItems } = props;
    return (
        <div class="layout-container">
            <div class="nav-content">
                {navItems[selectedIndex]['comp']}
            </div>
            <ul class="nav-list">
                {
                    navItems.map((nav, index) => {
                        return (
                            <li class={selectedIndex === index ? 'selected' : ''} onClick={() => setSelectedIndx(index)}>{nav['text']}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}