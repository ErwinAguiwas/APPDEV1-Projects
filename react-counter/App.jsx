import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header />
  <Counter />
  <Footer />
 
    </>
  )
}

export default App
