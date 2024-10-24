import React from 'react';

function ErrorDisplay({ error }) {
    if (!error) return (
        <div className="noerror">{ }</div>
    );
    return (
        <div className="error">{error}</div>
    );
}

export default ErrorDisplay;
