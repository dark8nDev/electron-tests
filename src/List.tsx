import { useState } from 'react';

export default function List() {
  const options = ["Apple", "Banana", "Cherry", "Orange"]; // your list
  const [selected, setSelected] = useState([]); // store selected items

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
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Pick your fruits:</h2>
        {options.map((item) => (
          <label key={item} className="block">
            <input
              type="checkbox"
              value={item}
              onChange={handleChange}
              checked={selected.includes(item)}
            />
            {item}
          </label>
        ))}

        <div className="mt-4">
          <h3 className="font-semibold">Selected:</h3>
          <pre>{JSON.stringify(selected, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}
