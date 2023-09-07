// import logo from './logo.svg';
import './App.css';
import data from "./data/data.json";
import Card from './component/Card';
import Header from './component/Header';
import { imageList } from './component/images';
import Btn from './component/Btn';




function App() {
  
 const myImages = imageList.map(images=>images);
  return (
    <div className="App">
     <Header />
    <div className='card-container'>
    <Card data = {data[0]} logo={myImages[9]}/>
    <Card data = {data[1]} logo={myImages[0]}/>
    <Card data = {data[2]} logo={myImages[11]}/>
    <Card data = {data[3]} logo={myImages[6]}/>
    <Card data = {data[4]} logo={myImages[7]}/>
    <Card data = {data[5]} logo={myImages[2]}/>
    <Card data = {data[6]} logo={myImages[8]}/>
    <Card data = {data[7]} logo={myImages[4]}/>
    <Card data = {data[8]} logo={myImages[1]}/>
    <Card data = {data[9]} logo={myImages[5]}/>
    <Card data = {data[10]} logo={myImages[3]}/>
    <Card data = {data[11]} logo={myImages[10]}/>
    </div>
    <Btn loadMore="Load More"/>
    </div>
  );
}

export default App;
