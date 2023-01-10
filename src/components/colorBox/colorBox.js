import './colorBox.css'


function ColorBox() {

    return (
        <div className="color-box">
            <span className="color-box__color-name">
            Tomato Red
            </span>
            <span 
            className="color-box__color-name-box" 
            style={{
                backgroundColor: '#C34A2C'
            }}
            ></span>
        </div>
    )
}

export default ColorBox