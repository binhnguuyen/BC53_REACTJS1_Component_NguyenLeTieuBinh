import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BaiTapThuHanhLayout } from './BaiTapThuHanhLayout/BaiTapThuHanhLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='description' tabIndex="1">
      <BaiTapThuHanhLayout/>
    </div>
  )
}

export default App
