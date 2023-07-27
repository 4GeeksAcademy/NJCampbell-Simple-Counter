import React from "react";
import PropTypes from "prop-types";

const SimpleCounter = (props) => {
    return (
        <>
            <div className="counter-display">
                <div className="clock-img"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stopwatch" viewBox="0 0 16 16">
                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                </svg></div>
                <div className="seconds hundred-thousands">{props.hundredThousandsDigit}</div>
                <div className="seconds ten-thousands">{props.tenThousandsDigit}</div>
                <div className="seconds thousands">{props.thousandsDigit}</div>
                <div className="seconds hundreds">{props.hundredsDigit}</div>
                <div className="seconds tens">{props.tensDigit}</div>
                <div className="seconds ones">{props.onesDigit}</div>
            </div>
        </>
    );
}

SimpleCounter.propTypes = {
    onesDigit: PropTypes.number,
    tensDigit: PropTypes.number,
    hundredsDigit: PropTypes.number,
    thousandsDigit: PropTypes.number,
    tenThousandsDigit: PropTypes.number,
    hundredThousandsDigit: PropTypes.number

}


export default SimpleCounter;