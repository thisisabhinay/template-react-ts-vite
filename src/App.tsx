import { Button } from "@/components/ui/button"
import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-10 grid grid-cols-1 auto-rows-max gap-5">
      <div className="flex items-center gap-5">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold">Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>Count is {count}</Button>
      </div>
      <p className="read-the-docs text-slate-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
