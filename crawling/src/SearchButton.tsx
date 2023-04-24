import React, {FC} from "react";
import axios from "axios";
import {SearchResultType} from 'SearchTypes'
interface Props {
    searchFormVal: string
    setSearchResult: React.Dispatch<React.SetStateAction<Array<SearchResultType>|null>>;
}

//버튼&이벤트 컴포넌트
const SearchButton:FC<Props> = (props:Props)=> {
    return <>
        <button type="button" className="search-btn" onClick={() => {
            
            props.setSearchResult(null)

            axios({
                method: 'post',
                url: 'http://localhost/api/data',
                data: {
                    searchValue:props.searchFormVal
                }
            }).then((response) => {
                console.log(response)
                props.setSearchResult(
                    response.data?.map((result:SearchResultType)=>{
                        return {
                            title: result.title,
                            locationName: result.locationName,
                            price: result.price,
                            link: result.link,
                            imageSrc: result.imageSrc
                        }
                    })
                )       
            });
        }}>get data</button>
    </>
}

export default SearchButton;