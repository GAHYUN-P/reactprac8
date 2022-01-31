import { Route } from "react-router-dom";
import Home from "./Home"
import Cat from "./Cat"
import Dog from "./Dog"

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        {/* exact 속성이 없으면 포함하면 다보여줌
        들어가게 되면 패스가 완전히 똑같으면 보여줌! */}
        <Home data = {"im data"}/>
        {/* 페이지에 데이터 주는 법 */}
      </Route>
      <Route path="/cat/:cat_name" component={Cat}>
        {/* 동적라우팅 /:변수명 */}
        {/* <Cat/> */}
      </Route>
      <Route path="/dog">
        <Dog/>
      </Route>
    </div>
  );
}

export default App;
