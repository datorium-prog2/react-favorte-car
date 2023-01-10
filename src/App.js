import './App.css';

const carObject = {
  name: "Audi R8",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/R8_Coupe_V10_performance-1.jpg/2560px-R8_Coupe_V10_performance-1.jpg",
  description: "The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system. It was introduced by the German car manufacturer Audi AG in 2006.",
  inStock: false,
  isLuxus: true
}

function App() {


  return (
    <div className="car">
      <h1 className='car__title'>
        {carObject.name}

        <span className='car__star'>
          ⭐️
        </span>
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
    </div>
  );
}


export default App;