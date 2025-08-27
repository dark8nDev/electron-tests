import { useState } from 'react';

export default function About() {
  const [prob, setProb] = useState(0)

  const getProb = () => {
    const data = window.backend.fetchProb()
    setProb(data)
  }
  return (
    <>
      <p>{prob}</p>
      <button onClick={() => getProb()}>Get Probability</button>
    </>
  )
}
