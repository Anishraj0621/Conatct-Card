import './App.css';
import Card from './Component/Card';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import contact from './Component/Contact'

function createcard(contact){
  return(
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name} 
      image={contact.imgURL} 
      phone={contact.phone} 
      mail={contact.mail} 
    />
  )
}


function App() {
  return (
    <>

    <Navbar title="KeEpEr" />
    {contact.map(createcard)}
    <Footer />

    </>
  );
}

export default App;
