import NavBar from './components/NavBar';

function App() {
  return (<>
  <NavBar />
  <div className='container'>
    <h1>What is UX-NO</h1>
    <p> UX-NO is a web app inspired by recent events, that aims to provide the public with necessary information about the dangers of UXO's. UXO's are unexploded ordinance that are left over from conflict zones. This UXO's pose a threat to the general public once the area has been de-ocupied or the conflict has ended. </p>
  </div>
  <div className='container'>
    <h2> Why is this app important</h2>
    <p> This app is important to help the people that go back to their normal lives once a conflict has ended. This app will provide information on safety and the ability to report UXO's so that the local authorities can deal safely with the UXO.</p>
  </div>
  <div className='container'>
    <h2>Contact:</h2>
  </div>
</>
  );
}

export default App;
