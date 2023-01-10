import ColorBox from './components/colorBox/colorBox.js'

import './App.css';

const carObject = {
  name: "Audi R8",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/R8_Coupe_V10_performance-1.jpg/2560px-R8_Coupe_V10_performance-1.jpg",
  description: "The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system. It was introduced by the German car manufacturer Audi AG in 2006.",
  inStock: false,
  isLuxus: false,
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

function App() {


  return (
    <div className="car">
      <h1 className='car__title'>
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
      <span className={carObject.inStock ? "car__stock" : "car__not-in-stock"}>
        {carObject.inStock ? "In stock" : "Not in stock"}
      </span>

      <h4 className="car__title2">
        Available colors
      </h4>
      <div className="car__colors">
        <ColorBox
          colorName={carObject.color[0].name}
          colorCode={carObject.color[0].colorCode} 
        />
        <ColorBox
          colorName={carObject.color[1].name}
          colorCode={carObject.color[1].colorCode} 
        />
        <ColorBox
         colorName={carObject.color[2].name}
         colorCode={carObject.color[2].colorCode} 
        />
        <ColorBox
          colorName={carObject.color[3].name}
          colorCode={carObject.color[3].colorCode} 
        />
      </div>
    </div>
  );
}


export default App;