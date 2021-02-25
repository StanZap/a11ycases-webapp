import React, {useRef, useLayoutEffect} from 'react'
import './AutoFocusReadingCases.css'

const AutoFocusReadingCase = () => {
    const firstReadParagraph = useRef()
    useLayoutEffect(() => {
        if (firstReadParagraph.current) {
            firstReadParagraph.current.focus()
        }
    }, )

    return (
        <div>
            <h3 aria-hidden="true">Screen Reader Start Point</h3>
            <p tabIndex="-1" className="in-focus" ref={firstReadParagraph}>
                This paragraph is set to be read on page load.
            </p>
        </div>
    )
}


export { AutoFocusReadingCase }
