import './App.css'

function App() {
  return (
    <>
      <h1>Hello from Electron renderer!</h1>
      <p>👋</p>
      <p id="info"></p>

      <button id="openBtn" onClick={() => versions.openSecond()}>Open Second Window</button>
    </>
  )
}

export default App
