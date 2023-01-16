import { useState } from 'react'
import './counter.css'


const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className='counter'>
            <h1>{count}</h1>
            <button 
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Add count
            </button>
        </div>
    )
}

export default Counter

// events - click, mouseover, sumbit
// state - 