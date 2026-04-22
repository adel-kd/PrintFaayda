import React from 'react';

const InputFields = ({ data, onChange }) => {
  // Common styling for inputs to keep the code DRY
  const inputStyle = "w-full p-2.5 border rounded text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all";
  const labelStyle = "text-[10px] uppercase font-bold text-gray-500 ml-1";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 p-1">
      {/* Names - Full Width */}
      <div className="col-span-1 md:col-span-2 space-y-3">
        <label className={labelStyle}>Full Name</label>
        <div className="flex flex-col gap-2">
          <input name="nameAmh" value={data.nameAmh} onChange={onChange} placeholder="ሙሉ ስም (Amharic)" className={inputStyle} />
          <input name="nameEng" value={data.nameEng} onChange={onChange} placeholder="Full Name (English)" className={inputStyle} />
        </div>
      </div>

      {/* Dates & Sex - Stacked on mobile, side-by-side on desktop */}
      <div className="space-y-3">
        <label className={labelStyle}>DOB & Issue</label>
        <div className="space-y-2">
          <input name="dob" value={data.dob} onChange={onChange} placeholder="DOB (Amh | Eng)" className={inputStyle} />
          <input name="issueDateAmh" value={data.issueDateAmh} onChange={onChange} placeholder="የተሰጠበት ቀን (Amh)" className={inputStyle} />
          <input name="issueDate" value={data.issueDate} onChange={onChange} placeholder="Issue Date (Eng)" className={inputStyle} />
        </div>
      </div>

      <div className="space-y-3">
        <label className={labelStyle}>Expiry & Sex</label>
        <div className="space-y-2">
          <input name="expiryDate" value={data.expiryDate} onChange={onChange} placeholder="Expiry Date (Amh | Eng)" className={inputStyle} />
          <input name="sex" value={data.sex} onChange={onChange} placeholder="Sex (Amh | Eng)" className={inputStyle} />
        </div>
      </div>

      {/* Address - Improved grouping */}
      <div className="col-span-1 md:col-span-2 space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
        <label className={labelStyle}>Address Details</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-2">
            <input name="regionAmh" value={data.regionAmh} onChange={onChange} placeholder="ክልል (Amharic)" className={inputStyle} />
            <input name="region" value={data.region} onChange={onChange} placeholder="Region (English)" className={inputStyle} />
          </div>
          <div className="space-y-2">
            <input name="zoneAmh" value={data.zoneAmh} onChange={onChange} placeholder="ዞን (Amharic)" className={inputStyle} />
            <input name="zone" value={data.zone} onChange={onChange} placeholder="Zone (English)" className={inputStyle} />
          </div>
          <div className="col-span-1 sm:col-span-2 space-y-2">
            <input name="cityAmh" value={data.cityAmh} onChange={onChange} placeholder="ከተማ/ወረዳ (Amharic)" className={inputStyle} />
            <input name="city" value={data.city} onChange={onChange} placeholder="City/Woreda (English)" className={inputStyle} />
          </div>
        </div>
      </div>

      {/* Identifiers */}
      <div className="space-y-3">
        <label className={labelStyle}>FAN & SN</label>
        <div className="space-y-2">
          <input name="fan" value={data.fan} onChange={onChange} placeholder="FAN (Barcode)" className={inputStyle} />
          <input name="sn" value={data.sn} onChange={onChange} placeholder="SN (Serial)" className={inputStyle} />
        </div>
      </div>

      <div className="space-y-3">
        <label className={labelStyle}>FIN & Phone</label>
        <div className="space-y-2">
          <input name="fin" value={data.fin} onChange={onChange} placeholder="FIN Number" className={inputStyle} />
          <input name="phone" value={data.phone} onChange={onChange} placeholder="Phone Number" className={inputStyle} />
        </div>
      </div>
    </div>
  );
};

export default InputFields;