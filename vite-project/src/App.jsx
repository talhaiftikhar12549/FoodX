import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./components/home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/*<button onClick={() => setCount((count) => count + 1)}>*/}
        {/*  count is {count}*/}
        {/*</button>*/}
        {/*<Header count={count}/>*/}
        {/*<Home/>*/}
        {/*<Footer count={count}/>*/}
    </>
  )
}

export default App
