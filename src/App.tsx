// import React from 'react';
// import './App.css';
// import sun from './images/pixelPongSun.png';
// import bigCloud from './images/bigCloud.png';
// import smallCloud from './images/smallCloud.png'

// function App() {
//   return (
//     <div className="container">
//       <header className="header">
//         <h1>Hello</h1>
//       </header>
//       <main className="main">
//         <h1>Main</h1>
//       </main>
//       <footer className="footer">
//         <h1>Footer</h1>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import sun from './images/pixelPongSun.png';
import bigCloud from './images/bigCloud.png';
import smallCloud from './images/smallCloud.png'

function App() {
  return (
    <>
      <div id="pageContainer">
        <div id="header">
          <div>
            <img id='leftCloud' alt="leftCloud" src={bigCloud} width={316} height={110}></img>
          </div>
          <div>
            <img id='sunLeftCloud' alt="sunLeftCloud" src={bigCloud} width={316} height={110}></img>
            <img id="neonSun" alt="neonSun" src={sun} width={316} height={316}></img>
            <img id='sunRightCloud' alt="sunRightLeftCloud" src={smallCloud} width={315} height={110}></img>
          </div>
          <div>
            <img id='rightCloud' alt="RightCloud" src={bigCloud} width={315} height={110}></img>
          </div>
          {/* <img id='leftCloud' alt="leftCloud" src={bigCloud} width={316} height={110}></img>
          <img id="neonSun" alt="neonSun" src={sun} width={316} height={316}></img>
          <img id='sunLeftCloud' alt="sunLeftCloud" src={bigCloud} width={316} height={110}></img>
          <img id='sunRightCloud' alt="sunRightLeftCloud" src={smallCloud} width={315} height={110}></img>
          <img id='rightCloud' alt="RightCloud" src={smallCloud} width={315} height={110}></img> */}
        </div>
        <div id="body">
          <h1>Hello2</h1>
        </div>

        <div id="footer">
        <h1>Hello3</h1>
        </div>

      </div>
    </>
  );
}

export default App;