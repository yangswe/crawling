import React from "react";
import axios from "axios";
interface Props {
    searchFormVal: string
}

//버튼&이벤트 컴포넌트
const SearchButton = (props:Props)=> {
    return <>
        <button type="button" className="search-btn" onClick={() => {
            axios({
                method: 'post',
                url: 'http://localhost/api/data',
                data: {
                    searchValue:props.searchFormVal
                }
            }).then((response) => console.log(response));
        }}>get data</button>
    </>
}

export default SearchButton;