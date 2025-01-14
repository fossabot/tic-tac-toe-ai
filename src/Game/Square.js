import React from 'react';
import {spotScoreMap} from "./Settings";

export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick} title={JSON.stringify(spotScoreMap.get(props.index))}
                disabled={props.disabled}>
            {props.highlight ? <strong style={{"color": "red"}}>{props.value}</strong> : <span>{props.value}</span>}
        </button>
    );
}
