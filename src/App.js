import './App.css';
import React, {useState, useEffect} from 'react';
import CardItem from './components/CardItem';
import SearchBar from './components/SearchBar';

function App() {
  const [images,setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    // fetch(`https://pixabay.com/api/?key=33940194-91d7ebeb199f6d06d9e8aea3e&q=yellow+flowers&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
      console.log(data.hits);
    })
    .catch(err=> console.log(err));
  },[term]);

  return (
    <div className="mt-12 container mx-auto">
      {isloading?
        <div className="mx-auto text-center text-6xl font-bold">
          Loading...
        </div>
      :''}
      <SearchBar searchTerm={(text) => setTerm(text)}/>
      {/* <div className="mt-12 grid grid-cols-4 gap-4">
        {images.map(image=>(
          <CardItem key={image.id} data={image}/>
        ))}
      </div> */}
      <div class="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28 mt-12">
        {images.map(image=>(
          <CardItem key={image.id} data={image}/>
        ))}
      </div>
    </div>
  );
}

export default App;
