import { useState } from 'react'
import './counter.css'


const Counter = () => {
    const [count, setCount] = useState(0)
    const [person, setPerson] = useState({
        name: 'Jānis',
        age: 29,
        likeCats: true
    })

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
            <button
                onClick={() => {
                    setCount(count - 1)
                }}
            >
                Remove count
            </button>
            <button onClick={() => {
                setCount(0)
            }}>
                Reset
            </button>
            <br /><br /><br />
            <h1>Person:</h1>
            <h2>Person name is: {person.name}</h2>
            <h2>Person age is: {person.age}</h2>
            <button 
            onClick={() => {
                setPerson({
                    name: 'John',
                    age: person.age,
                    likeCats: person.likeCats,
                })
            }}
            >
                Change name to John
            </button>
            <button onClick={() => {
                setPerson({
                    likeCats: person.likeCats,
                    name: person.name,
                    age: person.age + 1
                })
            }}>
                Add +1 to age
            </button>
        </div>
    )
}

export default Counter

// events - click, mouseover, sumbit
// state - 