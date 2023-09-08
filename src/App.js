// import logo from './logo.svg';
import './App.css';
import data from "./data/data.json";
import Card from './component/Card';
import Header from './component/Header';
import { imageList } from './component/images';
import Btn from './component/Btn';




function App() {
  
 const myImages = imageList.map(images=>images);
//  console.log(myImages.filter(str=>str.includes("scoot")));
  return (
    <div className="App">
     <Header />
    <div className='card-container'>
    {data.map(data=>{
      return <Card data = {data} key={data.id} logo={myImages.filter(str=>{
        return str.includes(data.company.split(" ").join("").toLowerCase())
      })}/>
    })}
    </div>
    <Btn loadMore="Load More"/>
    </div>
  );
}

export default App;
