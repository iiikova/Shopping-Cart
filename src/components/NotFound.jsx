import React from 'react'

const NotFound = () => {
    const btnForward = ()=> {
        window.history.go('index.html')
        console.log('back');
    }
    return (
        <div>
            <h1>Not Found</h1>
            <button onClick={()=> btnForward()}>forward</button>
        </div>
    )
}

export default  NotFound;