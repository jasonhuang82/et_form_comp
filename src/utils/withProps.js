import React from 'react';
const withProps = (Component, extraProps = {}) => props => {
    if (!Component) return null;
    return <Component {...props} {...extraProps}/>
}


export default withProps;