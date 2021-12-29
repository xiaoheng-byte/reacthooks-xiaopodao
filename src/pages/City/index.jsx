import React, {useState} from "react"
import CityHeader from "../../components/PubHeader"
import CurrentPosition from "./CurrentPosition"
import CityList from "./CityList"
import { useSelector, useDispatch} from "react-redux"
import {initCity, changeCity} from "../../redux/actions/city"
const City = () =>{
   // const [city,setCity] = useState("NUS")
    const dispatch = useDispatch()
    const city = useSelector(state => state.city)
    function onCityEvent(city){
        dispatch(changeCity(city))
    }
    return(
        <div>
            <CityHeader />
            <CurrentPosition city={city.cityName}/>
            <CityList onEvent={onCityEvent}/>
        </div>
    )
}
export default City;