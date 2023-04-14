import React, { useState } from "react";

interface Props {
    setSearchFormVal: React.Dispatch<React.SetStateAction<string>>;
    searchFormVal: string
}

//검색 Form 컴포넌트
function SearchForm(props: Props) {

    const chagneState = (e:React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchFormVal(e.target.value);
    };

    return <>
        <input type="text" className="search-text" value={props.searchFormVal} onChange={(e) => chagneState(e)} />
    </>;
}

export default SearchForm;