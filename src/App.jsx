
import { useState } from "react"

function App() {

  const [color, setColor] = useState("bg-white")

  return (
    <div className={`${color} min-h-screen flex flex-col justify-center items-center gap-5`}>

      <h1 className="text-3xl font-bold">
        Background Color Changer || By BASHEER ULLAH
      </h1>

      <div className="flex gap-3">

        <button
          onClick={() => setColor("bg-red-500")}
          className="bg-red-500 text-white p-3 rounded-lg"
        >
          Red
        </button>

        <button
          onClick={() => setColor("bg-blue-500")}
          className="bg-blue-500 text-white p-3 rounded-lg"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("bg-green-500")}
          className="bg-green-500 text-white p-3 rounded-lg"
        >
          Green
        </button>

        <button
          onClick={() => setColor("bg-yellow-400")}
          className="bg-yellow-400 text-black p-3 rounded-lg"
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("bg-white")}
          className="bg-white text-black p-3 rounded-lg"
        >
          White
        </button>

      </div>

    </div>
  )
}

export default App
