import { useState } from 'react'
import './counter.css'


const Counter = () => {
    // izveidojam state, kurā varēsim veidot dažādus stāvokļus mūsu komonentam
    // name - state nosaukums
    // setName - funkcija, kas ļauj mainīt state
    // ('') - iekavās, sākuma vērtība
    // IK REIZI KAD STATE TIEK MAINĪTS KOMPONENTS TIEK PĀRZĪMĒTS
    const [name, setName] = useState("")
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
                // kad nomaina inputu, mums nāk līdz eventa objekts, 
                // kurā ir informācija par eventu
                onChange={(eventObject) => {
                    // eventa objektam var tikt klāt ievades vērtībai vaur target.value keyiem
                    setName(eventObject.target.value)
                }}
            />
            <br /><br /><br />
            <h1>{count}</h1>
            <button 
                onClick={() => {
                    // mainam steitu, kur jaunais satate būs vecais + 1
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
                    // ... saucās spread operators, kurš paņem person objekta vērtības un "ielej" jaunajā objektā
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
