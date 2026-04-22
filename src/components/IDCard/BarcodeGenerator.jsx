import React from 'react';
import Barcode from 'react-barcode';

const BarcodeGenerator = ({ value }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      {value ? (
        <Barcode 
          value={value} 
          width={1.2} 
          height={30} 
          displayValue={false} 
          margin={0}
        />
      ) : (
        <span className="text-[8px] text-gray-300">No FAN</span>
      )}
    </div>
  );
};

export default BarcodeGenerator;