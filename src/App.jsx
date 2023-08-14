import { useState } from 'react'

import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Canvas from './canvas';


function App() {
  return (
   
      <div>
        {/* <h1>Threejs</h1> */}
        <main className='app transiotion-all ease-in'>
          <Home />
          <Canvas />
          <Customizer />
        </main>
      </div>
       
  )
}

export default App
