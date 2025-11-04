 
import './App.css'
import Chatbot from './components/chatbot'
import Hero from './components/Hero'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

 

function App() {
  

  return (
    <>
   <Navbar/>
 
   <Hero greeting="Tienda "/>
    <ItemListContainer greeting="Tienda "/>
    <ItemCount/>
   
    </>
  )
}

export default App
