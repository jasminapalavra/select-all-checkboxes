import { useState } from 'react'
import './App.css'
import SelectAllCheckboxes from './components/SelectAllCheckboxes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SelectAllCheckboxes />
    </>
  )
}

export default App
