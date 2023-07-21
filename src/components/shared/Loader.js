import React from "react";
 // Import the CSS file for styling

const Loader = () => {
    return (
        <div className='dwa-spinner'>
        <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    );
};

export default Loader;
