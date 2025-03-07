import { useState, useEffect } from 'react'
import axios from 'axios';


 export default function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts/1')  //Example API
    .then((response) => {
      setData(response.data);
    })

    .catch((error) => {
      console.error('Error fetching data:', error)
    });
  }, []);

  return (
    <div className='app'>
      <h1>Axios Example</h1>

        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
    </div>
  );
}