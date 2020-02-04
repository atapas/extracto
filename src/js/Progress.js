import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Progress = props => {
    let percent = Math.round(props.progress * 100);
    let label = props.label;
    let variant = 'success';
    if (percent >=0 && percent <20) {
        variant = 'info';
    }else if (percent >=20 && percent <70) {
        variant = 'warning';
    }
    
    return(
        <div>
            <h3>{ label }</h3>
            <ProgressBar animated variant={ variant } now={ percent } label={`${percent}%`} />
        </div>
    )
};

export default Progress;