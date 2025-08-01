import React, { useState } from "react";
import QRCode from "react-qr-code";
function App() {
  const [value, setValue] = useState("");
  const [qrValue, setQrValue] = useState(null);
  return (
    <div className="min-h[750px] w-full flex flex-col items-center justify-center gap-5 py-10">
      <input
        type="text"
        placeholder="value or link"
        className="border rounded-md px-1 py-2 "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setQrValue(value);
        }}
        className="bg-slate-800  hover:bg-slate-500 shadow-2xl p-2 rounded text-white cursor-pointer font-semibold"
      >
        Generate
      </button>
      <div>{qrValue && <QRCode value={qrValue} size="200px" />}</div>
    </div>
  );
}

export default App;
