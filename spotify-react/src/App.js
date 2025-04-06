import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import Sidebar from './Sidebar/Sidebar';


function App() {
  return (
    <div>
      <main className='main-container'>
        <Header></Header>
        <Playlist></Playlist>
        <Sidebar></Sidebar>
      </main>
           
      
      <Footer></Footer>
    </div>
  );
}

export default App;
