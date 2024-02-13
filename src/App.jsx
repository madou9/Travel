import './App.css'
import styles from './styes.jsx'
import {Navbar, About, Customers} from './components/'

function App() {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         <About />
         <Customers />
        </div>
      </div>
    </div>
  )
}

export default App
