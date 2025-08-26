// src/components/navbar/FloatingLines.js
import React from 'react';

const FloatingLines = (props) => {
    return (
        <div
            style={{
                width: '10%',
                height: '10%',
                background: 'linear-gradient(95deg, #E945F5, #2F4BC0, #E945F5)',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0,
            }}
        >
            {/* You can add more animation here */}
        </div>
    );
};

export default FloatingLines;
