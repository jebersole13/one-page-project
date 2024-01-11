import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Sections/About';
import Details from './Sections/Details';
import Offering from './Sections/Offering';


function App() {
  return (
    <div className='App'>
      <Navbar/>
        <h1 className="text-3xl font-bold underline">
      One page Scroller Test
    </h1>  

 //why didn this not work before?
<About/>
<Details/>
<Offering/>
   
<Footer/>
    </div>
  )
}

export default App
