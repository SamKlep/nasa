import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import Main from './components/layout/Main';

function App() {
  // const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     setIsLoading(true);
  //     const result = await axios(
  //       `https://api.nasa.gov/planetary/apod?api_key=83BMAdJKqrJkZgt0UfxeidErpbduui3NryEBIKjF`
  //     );

  //     console.log(result.data);

  //     setItems(result.data);
  //     setIsLoading(false);
  //   };

  //   fetchItems();
  // }, []);

  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
