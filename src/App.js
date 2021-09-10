import "./App.css";
import Navbar from "./component/Navbar";
import Textutil from "./component/Textutil";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Textutil heading="Enter The Text :" />
      </div>
    </>
  );
}


export default App;
