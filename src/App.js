//import logo from './logo.svg';
import './styles/App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home'
import '../src/styles/background.scss'
import ParallaxBackground from './components/subComponents/backGround'
//import Background from './components/Background'

function App() {
  return (
    
    <div className="App">
      <NavBar></NavBar>
      <section>
      <Home>

      </Home>
      </section>      
      
      
      <Footer></Footer>
      
      
      
      
      <ParallaxBackground className="background"> 
      </ParallaxBackground>
    </div>
  );
}
//<Background></Background>
      /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>*/
export default App;