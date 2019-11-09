import React from 'react';
import Backend from './BackendCoder';
import Germinal from './Terminal';
import Sky from 'react-sky';

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function App() {
  return (
    <div className="App" >
      <Sky
        images={isMobileDevice()?{
          0: 'https://grayhat12.github.io/favicon_io/apple-touch-icon.png',
          1: 'https://image.flaticon.com/icons/svg/226/226777.svg',
          2: 'https://image.flaticon.com/icons/svg/1822/1822899.svg',
          3: 'https://image.flaticon.com/icons/svg/136/136530.svg',
          4: 'https://image.flaticon.com/icons/svg/919/919825.svg',
          5: 'https://image.flaticon.com/icons/svg/174/174836.svg',
          6: 'https://cdn.worldvectorlogo.com/logos/react.svg',
          7: 'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png'
        }:{
          0: 'https://grayhat12.github.io/favicon_io/apple-touch-icon.png',
          1: 'https://image.flaticon.com/icons/svg/226/226777.svg',
          2: 'https://image.flaticon.com/icons/svg/1822/1822899.svg',
          3: 'https://image.flaticon.com/icons/svg/136/136530.svg',
          4: 'https://image.flaticon.com/icons/svg/919/919825.svg',
          5: 'https://image.flaticon.com/icons/svg/174/174836.svg',
          6: 'https://cdn.worldvectorlogo.com/logos/react.svg',
          7: 'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png',
          8: 'https://grayhat12.github.io/favicon_io/apple-touch-icon.png'
        }}
        how={(isMobileDevice())? 40: 100}
        time={100}
        size={'50px'}
        background={'palettedvioletred'}
      />
      <Backend />
      <Germinal />
    </div>
  );
}

export default App;
