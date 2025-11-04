 
import './App.css'
 
import Hero from './components/Hero'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

 

function App() {
  

  return (
    <>
   <Navbar/>
   <Hero greeting="Tienda "/>
    <ItemListContainer saludar='Federico'/>
    <ItemCount/>
    </>
  )
}

export default App
