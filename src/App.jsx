import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Sections/About';
import Details from './Sections/Details';
import Offering from './Sections/Offering';
import Contact from './Components/Contact';


function App() {
  return (
    <div className='App'>
      <Navbar/>
        <h1 className="text-3xl font-bold underline">
      One page Scroller Test
    </h1>  

<h5>About Section</h5>
<br />
<About/>

<h5>Details Section</h5>
<br />
<Details/>

<h5>Offering section</h5>
<br />
<Offering/>
   <br />
<br />

<Contact/>
<Footer/>
    </div>
  )
}

export default App
