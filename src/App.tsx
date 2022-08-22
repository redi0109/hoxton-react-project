import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function App() {


  return (
    <div className="App">
    <header className='header'>
      <div className='logo'>
       <img className='logo-img'  src='../public/images/logo.png' >
        </img>
      </div>
      <div className='menu'>
        <ul>
          <li>Pizza</li>
          <li>Samdwiches</li>
          <li>Salads</li>
          <li>Lunch</li>
          <li>Drinks</li>
          <li>Beers</li>
          </ul>
         
      </div>
      <div className='search-bar'>
        <input type='text' placeholder='Search'></input>
      </div>
      <div className='cart'>
        <ShoppingCartIcon/>
      </div>
    </header>
    <main className='main'>

    </main>
    <footer className='footer'>
      </footer>
    </div>
  )
}

export default App
