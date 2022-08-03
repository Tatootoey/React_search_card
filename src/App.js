import AdvItem from "./Advitem";
import AdvPost from "./AdvPost";
import "./App.css";
import motoadvs from "./motoadvs";
import AppHeader from "./Appheader";
import React ,{useState} from 'react';
import AppSearch from "./Appsearch";


function App(){ 
  const [ selectedAdvs, setSelectedAdvs ] = useState(null);
  const [searchText,setSearchText] = useState('');

  function onAdvOpenClick(theAdv) {
    setSelectedAdvs(theAdv);
  }
  function onAdvCloseClick()
  {
    setSelectedAdvs(null);

  }
  const filteredAdvs= motoadvs.filter((motoadv)=>{
    return motoadv.title.includes(searchText);
  });
  const motoadvElements = filteredAdvs.map((motoadvs, index) =>{
    return <AdvItem key={index} motoadv={motoadvs} onMotoadvClick={onAdvOpenClick} />;
  });

let advpost = null;  
if  (!!selectedAdvs) {
        advpost = <AdvPost motoadv={selectedAdvs} onBgClick={onAdvCloseClick} />
}

  return (

    <div className="App">
      
      <AppHeader />
      <AppSearch value={searchText} onValueChange={setSearchText} />
      
      <div className="app-grid">
            {motoadvElements}
      </div>
            {advpost}
    </div>
  );
}


export default App;
