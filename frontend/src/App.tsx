import DocPage from './document/pages/DocPage'
import Chat from './chat/pages/Chat'

function App() {
  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      <div className="w-1/3 min-w-[300px] max-w-[400px] border-r border-gray-200 bg-white p-4 overflow-y-auto shadow-sm z-10">
        <DocPage />
      </div>

      <div className="flex-1 bg-gray-50 flex flex-col">
        <Chat />
      </div>
    </div>
  )
}

export default App
