import Task from "./components/Task";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header-container"> 
      <Header/>
      </div>
      <div className="task-container"> 
      <Task> </Task>
      <Task> </Task>
      <Task> </Task>
      <Task> </Task>
      <Task> </Task>
      <Task> </Task>
      <Task> </Task>
      <Task> </Task>
      <Task> </Task>
      <Task> </Task>
      <Task> </Task>
      </div>
      <div className="footer-container"> 
      <Footer/>
      </div>
    </div>
  );
}

export default App;
