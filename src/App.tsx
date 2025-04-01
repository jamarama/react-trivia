import "./App.css";
import Questions from "./Questions";

function App() {
  return (
    <>
      <div className="main-nav">
        <h1 className="text-center">Astrological Trivia</h1>
        <p className="text-center">How well do you know the signs!</p>
      </div>
      <div className="content">
        <div className="cards-container">
  
            <Questions category='Planets' title='Mars' description='Ruler of Aries'/>
      
          </div>
        </div>
    </>
)
}

export default App;
