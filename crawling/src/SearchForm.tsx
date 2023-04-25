import React, { useState, FC } from "react";

interface Props {
    setSearchFormFunc: React.Dispatch<React.SetStateAction<string>>;
    searchValue: string,
}



//검색 Form 컴포넌트
const SearchForm:FC<Props> = (props: Props) => {

    const chagneState = (e:React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchFormFunc(e.target.value);
    };

    return <input type="text" className="search-text" value={props.searchValue} onChange={(e) => chagneState(e)} />
}

export default SearchForm;