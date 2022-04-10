import Nav from "./componentes/Nav";
import Header from "./componentes/Header";
import Separar from "./componentes/Separar";
import Body from "./componentes/body";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './componentes/contactForm';


function App() {
  return (
    <div className="App">
      <Header/> 
      <Nav/>
      <Separar/>
      <Body/>
      <Separar/>
      <ContactUs/> 
      </div>
  );
}

export default App;
