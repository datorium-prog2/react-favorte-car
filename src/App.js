import ColorBox from './components/colorBox/colorBox.js'

import './App.css';
import { useState } from 'react';

const defaulCarObject = {
  name: "Audi R8",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/R8_Coupe_V10_performance-1.jpg/2560px-R8_Coupe_V10_performance-1.jpg",
  description: "The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system. It was introduced by the German car manufacturer Audi AG in 2006.",
  inStock: false,
  isLuxus: true,
  color: [
    {
      name: 'Tomato Red',
      colorCode: '#C34A2C'
    },
    {
      name: 'Panther Black',
      colorCode: '#0f0d0d'
    },
    {
      name: 'Nardo Gray',
      colorCode: '#686A6C'
    },
    {
      name: 'Phthalo Green',
      colorCode: '#0E2F19'
    },
  ]
}

// Mēs gribam lai uzspiežot uz car__title, tiek mainīts mašīnas objekta staitā 
// isLuxus uz pretējo, attiecīgi lai majaslapā parādās vai paslēpjās zvaigznīte

function App() {
  const [carObject, setCarObject] = useState(defaulCarObject)
  const [newColorValue, setNewColorValue] = useState({
    name: '',
    colorCode: ''
  })

  return (
    <div>
      <div className="car">
        <h1 
          className='car__title'
          onClick={() => {
            const updatedCarObject = {
              ...carObject,
              isLuxus: !carObject.isLuxus
            }


            setCarObject(updatedCarObject)
         }}
        >
          {carObject.name}
          {carObject.isLuxus && (
            <span className='car__star'>
              ⭐️
            </span>
          )}
        </h1>
        <img 
          src={carObject.imageUrl}
          alt="Audi r8" 
          className='car__image'
        />
        <p className='car__info'>
          {carObject.description}
        </p>
        <div className='car__stock-wrapper'>
          <button onClick={() => {
            const updatedCarObject = {
              ...carObject,
              inStock: !carObject.inStock
            }

             setCarObject(updatedCarObject)
          }}>
            Change
          </button>
          <span className={carObject.inStock ? "car__stock" : "car__not-in-stock"}>
            {carObject.inStock ? "In stock" : "Not in stock"}
          </span>
        </div>

        <h4 className="car__title2">
          Available colors
        </h4>
        <div className="car__colors">
          {carObject.color.map((color) => {
              return (
                <ColorBox
                  key={Math.random()}
                  colorName={color.name}
                  colorCode={color.colorCode} 
                />
              )
            })}
        </div>
        <div className="car__form">
          <label className='car__form-label'>
            Color name
            <input 
              type="text" 
              placeholder='Tomato red...'
              value={newColorValue.name}
              onChange={(eventObject) => {
                const updatedNewColorValue = {
                  ...newColorValue,
                  name: eventObject.target.value
                }
    

                setNewColorValue(updatedNewColorValue)
              }}
             />
          </label>
          <label className='car__form-label'>
            Color
            <input 
              type="color"
              value={newColorValue.colorCode}
              onChange={(eventObject) => {
                const updatedNewColorValue = {
                  ...newColorValue,
                  colorCode: eventObject.target.value
                }

                setNewColorValue(updatedNewColorValue)
              }}
             />
          </label>
          <button 
            onClick={() => {
              const updatedCarObject = {
                ...carObject,
                color: [
                  ...carObject.color,
                  { 
                    name: newColorValue.name,
                    colorCode: newColorValue.colorCode
                   }
                ]
              }

              setCarObject(updatedCarObject)

              setNewColorValue({
                name: '',
                colorCode: ''
              })
            }}
            disabled={!newColorValue.name || !newColorValue.colorCode}
          >
            Add color
          </button>
        </div>
      </div>
    </div>
  );
}


export default App;