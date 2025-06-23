import './App.css'
import { useEffect, useState } from 'react';

const FollowMouse = () =>{
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x:0, y: 0});

  useEffect(()=>{
    console.log('efecto', enabled)
    const handleMove= (e)=>{
      const {clientX, clientY} = e;
      console.log('handleMove', clientX, clientY)
      setPosition({x:clientX, y:clientY})
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    // cleanup
    return ()=>{
      console.log('cleanup')
      setPosition({x:0, y:0})
      window.removeEventListener('pointermove', handleMove)
    }
  },[enabled])

  return (
    <main className="no-cursor">
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
       
      }} />
      <button onClick={()=> setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )

}

function App() {
  const [mounted, setMounted] = useState(false)


  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={()=> setMounted(!mounted)}>Toggle</button>
    </main>
  )

  
}

export default App
