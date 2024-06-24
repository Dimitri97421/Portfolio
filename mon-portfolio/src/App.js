import './App.scss';
import Header from './composants/Header'
import Footer from './composants/Footer'
import PhotoProfile from './img/moi.jpg'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <section className='accueil_section'>
          <div className='presentation'>
            <h1 className='typewriter'>
              Bonjour, je suis Dimitri Gonthier
            </h1>
            <p className='typewriter'>
              Je suis développeur web front end
            </p>
          </div>
         <img src={PhotoProfile} alt='photo de moi' className='spin_animation'/>
        </section>

        <section className='projects_section'>
        <h1>
              Bonjour, je suis Dimitri Gonthier
            </h1>
        </section>

        <section className='contact_section'>
        <h1>
              Bonjour, je suis Dimitri Gonthier
            </h1>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
