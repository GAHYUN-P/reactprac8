import React from "react";
import { useHistory } from "react-router-dom";

const Dog = (props) => {
    const history = useHistory();
    console.log(props);
    // 안에서 history 객체를 확인할 수 있다

    return (
        <div onClick={() => {
            history.push("/cat")
            // push는 페이지 이동하는 내장함수
        }}>강아지 화면이에요.</div>
    )
}

export default Dog;