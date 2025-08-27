import { useState, useEffect, useRef } from 'react';

export default function Output() {
  const [data, setData] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (window.backend) {
      window.backend.onSerialData((data) => {
        setData((prev) => prev + data + "\n");
      });
    }
  }, [])

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [data]);


  return (
    <>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Generated Data</h2>
        <textarea
          ref={textareaRef}
          value={data}
          readOnly
          className="w-full h-64 border rounded p-2"
        />
      </div>
    </>
  )
}
