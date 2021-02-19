import React from 'react'
import './ButtonCase.css'

const ButtonCase = () => (
    <div className="ButtonCase">
        <h3 aria-hidden="false">How screen readers announce buttons?</h3>

        <p>
            <button type="button" title="Cancel">Cancel</button>
        </p>
        <p>
            <button type="button">Initiate Sequence</button>
        </p>
        <p>
            <button type="button">Confirm</button>
        </p>
    </div>
)

export { ButtonCase }