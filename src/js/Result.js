import React from "react";

const Result = (props) => {

    const done = (props.text === 'done!');
    return(
        <div>
            { done ? <h2> Resolved Text </h2> : <span></span> }
            <div className="result">{ props.text }</div>
        </div>
    )
};

export default Result;