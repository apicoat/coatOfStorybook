import React from 'react';
import './Alerts.css';

function Alerts(props) {
    const { variant = 'primarySuccess', children, ...rest } = props;

    return (
        <div className={ `alerts ${variant}`} {...rest}>
            {children}
        </div>
    )
}

export default Alerts
