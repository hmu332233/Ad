import React, { useEffect } from 'react';

type Props = {};

function Adfit({}: Props) {
  useEffect(() => {
    if (!document.getElementById('KakaoAdfit')) {
      const scriptKakaoJS = document.createElement('script');
      scriptKakaoJS.id = 'KakaoAdfit';
      scriptKakaoJS.src = '//t1.daumcdn.net/kas/static/ba.min.js';
      scriptKakaoJS.async = true;
      document.body.appendChild(scriptKakaoJS);
    }
  }, [])
  return (
    <ins className="kakao_ad_area" style={{ display: 'none' }} 
      data-ad-unit    = "DAN-o7sIbiwPbAROJCKE" 
      data-ad-width   = "728" 
      data-ad-height  = "90" />
  );
}

export default Adfit;