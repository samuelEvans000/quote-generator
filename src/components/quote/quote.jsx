
import  { useEffect, useState } from 'react';
import axios from 'axios';
import Headers from '../Header/Header'
import './quote.css'

const Quote = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const { content, author } = response.data;
      setQuote({
        content,
        author,
      });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
    <Headers/>
      <div className="container">
        <p className="quote">{quote.content}</p>
        <p className="author">-{quote.author}</p>
      </div>
    <div className='next-button'>
        <button className='next' onClick={fetchQuote} >next Quote</button>
    </div>
    </>
  );
};

export default Quote;
