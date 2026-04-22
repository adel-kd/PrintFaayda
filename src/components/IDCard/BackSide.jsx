import React from 'react';

const BackSide = ({ data }) => {
  return (
    <div className="id-card id-card-back" style={{ paddingLeft: '8px' }}>
      <img src={data.watermark || '/waterMark.png'} alt="Watermark" className="watermark" />
      <div className="main-content" style={{ width: '100%' }}>
        <div className="back-grid">
          <div className="back-left">
            <div className="field">
              <span className="label">ስልክ | Phone Number</span>
              <span className="val">{data.phone || ''}</span>
            </div>
            <div className="field">
              <span className="label">ዜግነት | Nationality <br /> 
                <small style={{ fontWeight: 'normal', fontSize: '7px' }}>(በተገለጸው መሠረት | Self Declared)</small>
              </span>
              <span className="val-amh">{data.nationalityAmh || 'ኢትዮጵያዊ'} | </span><span className="val">{data.nationality || 'Ethiopian'}</span>
            </div>
            <div className="field">
              <span className="label">አድራሻ | Address</span>
              <div className="address-stack">
                {/* Amharic then English for each address line */}
                <span className="address-line">{data.regionAmh || ''}</span>
                <span className="address-line" style={{ marginBottom: 3 }}>{data.region || ''}</span>
<br />
                <span className="address-line">{data.zoneAmh || ''}</span>
                <span className="address-line" style={{ marginBottom: 3 }}>{data.zone || ''}</span>
<br />
                <span className="address-line">{data.cityAmh || ''}</span>
                <span className="address-line">{data.city || ''}</span>
              </div>
            </div>
            
            <div className="fin-tag">
              <div className="fin-label">ፋይዳ<br />ልዩ ቁጥር</div>
              <div className="fin-divider"></div>
              <div className="fin-number">FIN <span className="fin_no">{data.fin || ''}</span></div>
            </div>
          </div>
          <div className="back-right">
            <div className="qr-blank">
               {data.qrCode && <img src={data.qrCode} className="w-full h-full object-cover" alt="QR" />}
            </div>
          </div>
        </div>
        <div className="bottom-disclaimer">
          <div className="bottom-txt">
            ይህ መታወቂያ የጠፋ ከሆነ በአቅራቢያዎ ላለ ፖሊስ ጣቢያ ወይም ለተቋሙ ያስረክቡ። ለተጨማሪ 9779 ላይ ይደውሉ ወይም id.et/cardprint ይጎብኙ።<br />
            If lost and found, please return to nearby police station or to the institution.call 9779 or visit id.et/cardprint for more.
            <div className="sn-wrap">
              <span className="sn-label">SN :</span>
              <div className="sn-white-box">{data.sn || ''}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackSide;