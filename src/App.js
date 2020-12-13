import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pages from './pages';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://gitconnected.com/v1/portfolio/clarissareeve'
    })
      .then(res => {
        console.log('res: ', res)
        setUser(res.data);

      })
  }, []);

  if (!user) {
    return <div />;
  }

  return <Pages user={user} />;
}

export default App;