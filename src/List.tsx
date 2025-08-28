import { useState, useEffect } from 'react';

export default function List() {
  const [ports, setPorts] = useState([])
  const [selected, setSelected] = useState([]); // store selected items

  useEffect(() => {
    getAllPorts()
  }, [])

  const getAllPorts = async () => {
    const portsList = await window.backend.getAllPorts();
    setPorts(portsList)
    setSelected([])
  }

  const savePorts = () => {
    if (selected.length) {
      selected.map(port => window.backend.createPort(port))
    } else {
      console.log("No ports selected")
    }
  }

  const getConnections = async () => {
    console.log(
      await window.backend.getConnections()
    )
  }

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      // add item
      setSelected((prev) => [...prev, value]);
    } else {
      // remove item
      setSelected((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <>      
      <div className="ports-list">
        <h2>Lista de Puertos</h2>
        {ports.map(port => (
          <label key={port.path}>
            <input
              type="checkbox"
              value={port.path}
              onChange={handleChange}
              checked={selected.includes(port.path)}
            />
            {port.path}
          </label>
        ))}
      </div>

      <button onClick={() => getAllPorts()}>Puertos</button>
      <button onClick={() => savePorts()}>Conectar</button>
      <button onClick={() => getConnections()}>Conexiones</button>
    </>
  )
}
