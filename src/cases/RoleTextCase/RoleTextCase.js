import React from 'react'

const RoleTextCase = () => (
    <div>
        <h3 aria-hidden="true">role="text"</h3>
   k        <p>
            <span role="text">Dominican Republic is not an <span className="italic">island</span>. Santo Domingo is the capital of Dominican Republic.</span>
        </p>

        <p role="text">
           One, two, three, <span className="sr-only">cuatro</span><span aria-hidden="false">four</span>, five.
        </p>
    </div>
)


export { RoleTextCase }
