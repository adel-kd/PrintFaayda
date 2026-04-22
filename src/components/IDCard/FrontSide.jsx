import React from 'react';
import BarcodeGenerator from './BarcodeGenerator';

const FrontSide = ({ data }) => {
  return (
    <div className="id-card id-card-front">
      <img src="/waterMark.png" alt="Watermark" className="watermark" />
      <div className="sidebar">
        <div className="vertical-text">
         የተሰጠበት ቀን: 
        <span className='vertical-data'>{data.issueDateAmh} </span>  
          Date of Issue: 
          <span className='vertical-data'>{data.issueDate}</span>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="flag"></div>
          <div className="titles">
            <h1>የኢትዮጵያ ዲጂታል መታወቂያ ካርድ</h1>
            <h2>Ethiopian Digital ID Card</h2>
          </div>
          <div className="header-logo-group">
            <div className="logo-box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXauUe-nyrTWmn7rAy-qKak5qpJiEMV2df3tI3C5DNg&s" alt="Logo" />
            </div>
            <div className="logo-text-stack">
              <p className="amh">ብሔራዊ መታወቂያ</p>
              <h3>National ID</h3>
            </div>
          </div>
        </div>
        
        <div className="body-row">
          <div className="photo-blank flex items-center justify-center overflow-hidden">
            {data.photo && <img src={data.photo} className="w-full h-full object-cover" />}
          </div>
          <div className="info-stack">
            <div className="field">
              <span className="label">ሙሉ ስም | Full Name</span>
              <span className="val-amh">{data.nameAmh}</span><br />
              <span className="val">{data.nameEng}</span>
            </div>
            <div className="field">
              <span className="label">የትውልድ ቀን | Date of Birth</span>
              <span className="val">{data.dob}</span>
            </div>
            <div className="field">
              <span className="label">ጾታ | Sex</span>
              <span className="val">{data.sex}</span>
            </div>
            <div className="field">
              <span className="label">የሚያበቃበት ቀን | Date of Expiry</span>
              <span className="val">{data.expiryDate}</span>
            </div>
            
            <div className="fan-row">
              <div className="fan-label-stack">
                <span className="amh">ካርድ</span><span className="amh">ቁጥር</span><span>FAN</span>
              </div>
              <div className="barcode-container">
                {/* FAN number shown above the barcode in the white space */}
                
                <div className="barcode-box">
                  {data.fan ? <div className="fan-number">{data.fan}</div> : null}
                  <BarcodeGenerator value={data.fan} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontSide;