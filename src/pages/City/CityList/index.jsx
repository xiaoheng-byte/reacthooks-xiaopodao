import React from "react"
import "./style.less"

const CityList = (props) => {

    function clickCityHandle(city){
        props.onEvent(city);
        window.history.back();
    }

    return (
        <div className="city-list-container">
            <ul className="clear-fix">
                <li onClick={ () => clickCityHandle('NUS') }><span>NUS</span></li>
                <li onClick={ () => clickCityHandle('NTU') }><span>NTU</span></li>
                <li onClick={ () => clickCityHandle('Vivo City') }><span>Vivo City</span></li>
                <li onClick={ () => clickCityHandle('IMM') }><span>IMM</span></li>
                <li onClick={ () => clickCityHandle('Orchard') }><span>Orchard</span></li>
                <li onClick={ () => clickCityHandle('China Town') }><span>China Town</span></li>
                <li onClick={ () => clickCityHandle('Clementi') }><span>Clementi</span></li>
                <li onClick={ () => clickCityHandle('Dover') }><span>Dover</span></li>
                <li onClick={ () => clickCityHandle('Buona Vista') }><span>Buona Vista</span></li>
            </ul>
        </div>
    )
}

export default CityList