import React, { useState, useEffect } from 'react'
import { FaExclamation } from "react-icons/fa";

const Error = () => {
    return (
        <div className="error">
            <h1>WHOOPS! There was an error!</h1>
            <h1>Please go navigate back to another or previous page</h1>
            <h1 className="errSymbol"><FaExclamation/></h1>
        </div>
    )
}

export default Error
