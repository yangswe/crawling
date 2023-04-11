import React from "react";

interface Props {
    searchFormVal: string
}

//버튼&이벤트 컴포넌트
const SearchButton = (props:Props)=> {
    return <>
        <button type="button" onClick={() => {
          fetch('http://localhost/api/data', {
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                searchValue:props.searchFormVal
            })
        
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((e) => {
            console.log(e);
          });
        }}>get data</button>
    </>
}

export default SearchButton;