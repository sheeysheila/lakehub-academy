import Banner from "./Component/banner"
import Home from "./Component/home"
import Enterpreneur from "./Component/enterpreneur"
import Partner from "./Component/partner"
import Lakebasin from "./Component/lakebasin"
import Events from "./Component/events"

import Footer from "./Component/footer"


function App() {
  return (
    <div className="App">
      <Banner/>
      <Home/>
      <Enterpreneur/>
      <Partner/>
      <Lakebasin/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
