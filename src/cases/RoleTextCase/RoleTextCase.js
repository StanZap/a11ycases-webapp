import React from 'react'

const RoleTextCase = () => (
    <div>
        <h3 aria-hidden="true">role="text"</h3>
        <p>
            <span role="text">Dominican Republic is an <span className="italic">island</span>. Santo Domingo is in the Caribbean.</span>
        </p>

        <p role="text">
           One, two, three, <span className="sr-only">four</span><span>cuatro</span>, five.
        </p>
    </div>
)


export { RoleTextCase }
