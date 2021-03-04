import Header from './Components/Header.js';
import './App.css';
import Search from './Components/Search.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import { useEffect, useState, useCallback } from 'react';



function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedData, setSelectedData] = useState([]);



  const random = (dataArray) => {
    let randomNum = Math.floor(Math.random() * dataArray.length);

    let temp;
    if (randomNum !== temp) {
      temp = randomNum;
      return randomNum;
    } else {
      while (randomNum !== temp) {
        randomNum = Math.floor(Math.random() * dataArray.length);
      }
      temp = randomNum;
      return randomNum;
    }
  }

  const getQuote = useCallback(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setSelectedData(data);
        let rnd = random(data);

        if (data[rnd]?.author !== null) {
          setAuthor(data[rnd]?.author)
          setQuote(data[rnd]?.text)
        }
      });
  }, []);


  useEffect(() => {
    getQuote();
  }, [])


  return (
    <div className="App">
      <div className="container">
        <Header />
        <Search selectedData={selectedData} setSelectedData={setSelectedData} setQuote={setQuote} setAuthor={setAuthor} />
        <Main quote={quote} author={author} />
        <Footer getQuote={getQuote} />
      </div>
    </div>
  );
}

export default App;
