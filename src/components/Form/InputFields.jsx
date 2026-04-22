import React from 'react';

const InputFields = ({ data, onChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Names */}
      <div className="col-span-2 space-y-2">
        <label className="text-[10px] uppercase font-bold text-gray-400">Full Name</label>
        <input name="nameAmh" value={data.nameAmh} onChange={onChange} placeholder="ሙሉ ስም (Amharic)" className="w-full p-2 border rounded" />
        <input name="nameEng" value={data.nameEng} onChange={onChange} placeholder="Full Name (English)" className="w-full p-2 border rounded" />
      </div>

      {/* Dates */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-gray-400">DOB & Issue</label>
        <input name="dob" value={data.dob} onChange={onChange} placeholder="DOB (Amh | Eng)" className="w-full p-2 border rounded text-sm" />
        <input name="issueDateAmh" value={data.issueDateAmh} onChange={onChange} placeholder="የተሰጠበት ቀን (Amh)" className="w-full p-2 border rounded text-sm" />
        <input name="issueDate" value={data.issueDate} onChange={onChange} placeholder="Issue Date (Eng)" className="w-full p-2 border rounded text-sm" />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-gray-400">Expiry & Sex</label>
        <input name="expiryDate" value={data.expiryDate} onChange={onChange} placeholder="Expiry Date (Amh | Eng)" className="w-full p-2 border rounded text-sm" />
        <input name="sex" value={data.sex} onChange={onChange} placeholder="Sex (Amh | Eng)" className="w-full p-2 border rounded text-sm" />
      </div>

      {/* Address */}
      <div className="col-span-2 space-y-2 bg-gray-50 p-3 rounded">
        <label className="text-[10px] uppercase font-bold text-gray-400">Address (Amh/Eng)</label>
        <input name="regionAmh" value={data.regionAmh} onChange={onChange} placeholder="ክልል / Region (Amharic)" className="w-full p-2 border rounded mb-2" />
        <input name="region" value={data.region} onChange={onChange} placeholder="Region" className="w-full p-2 border rounded mb-2" />

        <input name="zoneAmh" value={data.zoneAmh} onChange={onChange} placeholder="ዞን / Zone (Amharic)" className="w-full p-2 border rounded mb-2" />
        <input name="zone" value={data.zone} onChange={onChange} placeholder="Zone" className="w-full p-2 border rounded mb-2" />

        <input name="cityAmh" value={data.cityAmh} onChange={onChange} placeholder="ከተማ/ወረዳ / City (Amharic)" className="w-full p-2 border rounded mb-2" />
        <input name="city" value={data.city} onChange={onChange} placeholder="City/Woreda" className="w-full p-2 border rounded" />
      </div>

      {/* Identifiers */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-gray-400">FAN & SN</label>
        <input name="fan" value={data.fan} onChange={onChange} placeholder="FAN (Barcode)" className="w-full p-2 border rounded text-sm" />
        <input name="sn" value={data.sn} onChange={onChange} placeholder="SN (Serial)" className="w-full p-2 border rounded text-sm" />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-gray-400">FIN & Phone</label>
        <input name="fin" value={data.fin} onChange={onChange} placeholder="FIN Number" className="w-full p-2 border rounded text-sm" />
        <input name="phone" value={data.phone} onChange={onChange} placeholder="Phone Number" className="w-full p-2 border rounded text-sm" />
      </div>
    </div>
  );
};

export default InputFields;