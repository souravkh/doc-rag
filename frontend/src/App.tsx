import { useState } from 'react'
import './App.css'
import DocPage from './document/pages/DocPage'
import Chat from './chat/pages/Chat'

function App() {
  return (
    <div className="flex min-h-screen">
      <div className="basis-[30%]">
        <DocPage />
      </div>

      <div className="basis-[70%]">
        <Chat />
      </div>
    </div>
  )
}

export default App
