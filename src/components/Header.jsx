import React from 'react'

export const Header = ({name,title}) => {
    return (
        <div style={{background:"yellow",padding:20}}>
            <h1>{title}</h1>
            <h1>{name}</h1>
            <p>This is header component for learning purpose</p>
        </div>
    )
}
