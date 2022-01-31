import React from "react";
import {useParams} from "react-router-dom";

const Cat = (props) => {
    // const cat_name = useParams();
    // useParams()라는 훅을 사용해서 데이터를 가져옴
    // console.log(cat_name);
    console.log(props);
    return (      
        <div>고양이 화면이에요.</div>
    )
}

export default Cat;