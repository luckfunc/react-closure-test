import { useState } from 'react';
import Demo from './components/demo';
export default function App() {
  const [currentId, setCurrentId] = useState('item-1');

  return (
    <>
      <Demo currentId={currentId} />
      <button onClick={() => setCurrentId('item-2')} style={{ position: 'fixed', top: 0, left: 0 }}>
        Click Me
      </button>
    </>
  )
}