import {INIT_CITY,CHANGE_CITY} from "../constants"
const defaultState = {
    cityName: "NUS"
}

const city = (state = defaultState,action)=>{
    switch(action.type){
        case INIT_CITY:
            return{
                cityName:action.cityName
            };
        case CHANGE_CITY:
            return {
                cityName: action.cityName
            };
        default:
            return state;
    }
}

export default city