import './colorBox.css'

function ColorBox({colorName, colorCode}) {

    return (
        <div className="color-box">
            <span className="color-box__color-name">
                {colorName}
            </span>
            <span 
            className="color-box__color-name-box" 
            style={{
                backgroundColor: colorCode
            }}
            ></span>


            <span></span>



        </div>
    )
}

export default ColorBox



//1. man ir mainīgais const coffee = true, ja coffee ir true mēs rādam takstu "kafija" ja nē tad "tēja"
// Atbilde:
// <span> {coffee ? "kafija" : "Tēja"} </span>

//2. man ir mainīgais, const imageSrc = "https://picsum.photos/200/300", kā es varu pievienot img elementam src kurā būs vērtība no mainīgā
// Atbilde:
// <img src={imageSrc} />

//3. man ir mainīgais, const imageData = {src: "https://picsum.photos/200/300", width: 200, height: 300}, šos parametrus vajag piešķirt bildei
// Atbilde:
// <img src={imageData.src} width={imageData.width} height={imageData.height} />

//4. man ir mainīgais, const textColor = 'red' un man vajag šo krāsu pielikt teksta elementam
// Atbilde:
// <span style={{color: textColor}}></span>

// 5. man vajag uztaisīt komponentes funkciju, kurā būs HTML <h1>Hello world</h1>, kā šī funkcija izskatīsies
// Atbilde:
// function hello() {
//     return (
//         <h1>Hello World</h1>
//     )
// }

// export default hello

// 6. No augstāk minētās komponentes, h1 saturs ir jāpaņem no props un jāielik h1 elementā, kā izskatīsies kods?
// Atbilde:
// function hello({teksts}){
//     return(
//       <h1>{teksts}</h1>
//     )
//   }
//   export default hello

// 7. Man ir mainīgais const isCold = true; Ja isCold ir true tad jārāda spans kurā iekšā ir 🥶 emoji, kā izskatīsies kods
// Atbilde:
// {isCold && (<span>🥶</span>)}

// 8. man ir masīvs ar atzīmēm const grades = [10, 5, 6, 7, 10, 9], un ir nepieciešams viņus atspoguļot JSX (HTML) kodā katru savā spanā izmantojot .map()
// Atbilde:
// {grades.map(grade => {
//     return (
//         <p>mark</p>
//      )
//   })

// 9. man ir css fails carBox.css, kurš atrodas tajā pašā mapē kur komponenta fails, kā es varu komponentā importēt šo failu?
// Atbilde:
// import './carBox.css'

// 10. Esmu App komponentā un man components mapītē ir mapīte carBox kur iekšā ir carBox komponents, kā es šo komponentu varu importēt un izmantot?
// Atbilde:
// import CarBox from "./components/carBox/carBox.js"
// <CarBox/>