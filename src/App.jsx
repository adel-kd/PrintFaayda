import React, { useState } from 'react';
import InputFields from './components/Form/InputFields';
import ImageUpload from './components/Form/ImageUpload';
import FrontSide from './components/IDCard/FrontSide';
import BackSide from './components/IDCard/BackSide';

function App() {
  const [idData, setIdData] = useState({
    nameAmh: '', nameEng: '',
    dob: '', issueDate: '', expiryDate: '',
    sex: '', phone: '', fin: '', sn: '', fan: '',
    region: '', zone: '', city: '',
    photo: null, qrCode: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIdData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-10 bg-slate-100 min-h-screen">
      {/* Left Form Panel */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-lg print:hidden">
        <h2 className="text-xl font-bold mb-4">ID Data Entry</h2>
        <InputFields data={idData} onChange={handleInputChange} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <ImageUpload label="Profile Pic" onUpload={(img) => setIdData(p => ({ ...p, photo: img }))} />
          <ImageUpload label="QR Code" onUpload={(img) => setIdData(p => ({ ...p, qrCode: img }))} />
        </div>
        <button onClick={() => window.print()} className="w-full mt-6 bg-teal-700 text-white py-3 rounded font-bold">
          Print / Save PDF
        </button>
      </div>

      {/* Right Preview Panel */}
      <div className="flex flex-col gap-20 items-center w-full lg:w-2/3">
        <FrontSide data={idData} />
        <BackSide data={idData} />
      </div>
    </div>
  );
}

export default App;