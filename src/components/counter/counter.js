import { useState } from 'react'
import './counter.css'


const Counter = () => {
    const [name, setName] = useState("123")
    const [count, setCount] = useState(0)
    const [person, setPerson] = useState({
        name: 'Jānis',
        age: 29,
        likeCats: true
    })

    return (
        <div className='counter'>
            <h2>My name is: {name}</h2>
            <input 
                type="text" 
                placeholder='Type your name'
                value={name}
                onChange={(eventObject) => {
                    setName(eventObject.target.value)
                }}
            />
            <br /><br /><br />
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
            <h2>Person likes cats: {person.likeCats ? 'yes' : 'no'}</h2>
            <button 
                onClick={() => {
                    setPerson({
                    ...person,
                        name: 'John',
                    })
                }}
            >
                Change name to John
            </button>
            <button onClick={() => {
                setPerson({
                    ...person,
                    age: person.age + 1
                })
            }}>
                Add +1 to age
            </button>
            <br /><br /><br />
        </div>
    )
}

export default Counter
