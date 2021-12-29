import React,{ useState,useRef,useEffect } from "react"
import "./style.less"
import { useSelector,useDispatch } from "react-redux"
import * as searchAction from "../../redux/actions/search"
import { useParams,useNavigate } from "react-router-dom"

const SearchInput = (props) =>{
    const [keywords,setKeywords] = useState("")
    const searchKey = useRef();
    const dispatch = useDispatch();
    const reduxKeywords = useSelector(state=>state.search);
    const params = useParams();
    const navigate = useNavigate();
    function keyUpHandle(e){
        if(keywords.length > 0){
            if(e.keyCode === 13){
                navigate("/search/"+keywords)
                dispatch(searchAction.updateSearch(keywords))
            }
        }
    }
    
    /**
     * 回传
     */
    useEffect(() =>{
        if(params.keywords){
            dispatch(searchAction.updateSearch(params.keywords))
        }else{
            dispatch(searchAction.updateSearch(""))
        }
        setKeywords(reduxKeywords.search)
    },[reduxKeywords.search,params.keywords])

    function changeHandle(e){
        setKeywords(e.target.value)
    }

    return(
        <input 
            className="search-input"
            type="text"
            onKeyUp={ keyUpHandle }
            value={keywords}
            onChange={ changeHandle }
            ref={ searchKey }
        />
    )
}

export default SearchInput