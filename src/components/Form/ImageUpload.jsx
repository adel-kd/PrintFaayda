import React from 'react';

const ImageUpload = ({ label, onUpload }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  };

  return (
    <div className="flex flex-col gap-1 border-2 border-dashed border-gray-200 p-2 rounded-lg hover:bg-gray-50 transition-colors">
      <label className="text-[10px] uppercase font-bold text-gray-500 text-center">{label}</label>
      <input 
        type="file" 
        onChange={handleChange} 
        className="text-[10px] file:mr-2 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-[10px] file:bg-teal-50 file:text-teal-700" 
      />
    </div>
  );
};

export default ImageUpload;