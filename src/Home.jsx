import { useState } from 'react';

export default function Home() {
  const [random, setRandom] = useState(0)

  const getRandom = () => {
    const data = window.backend.getRandom()
    setRandom(data)
  }

  const makeProb = () => {
    window.backend.makeProb()
  }

  return (
    <>
      <h1>Hello from Electron renderer!</h1>
      <p>{random}</p>
      <button onClick={() => getRandom()}>Random</button>

      <button onClick={() => makeProb()}>Probability</button>
    </>
  )
}
