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
        </div>
    )
}

export default ColorBox
