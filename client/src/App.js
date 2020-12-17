import React from 'react';
import './App.css'
import axios from 'axios'
axios.defaults.withCredentials = true


const LOCAL_HOST = 'http://localhost:3777/api'
const REMOTE_HOST = 'https://haisanmo3-backend.herokuapp.com/api'
// const HOST = 'https://haisanmo3-backend.herokuapp.com/api'
const HOST = LOCAL_HOST;

const email = 'anhld1111@g.com';
const username = 'anhld';
const password = 'anhld';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaGxkMTExMUBnLmNvbSIsImlhdCI6MTYwODEwNzMxMCwiZXhwIjoxNjA4MTE0NTEwfQ.HfJtMGKJRkmqb-dZcsjSlxQCaRwJt2m9FqEJGSRCcGY';
const refeshToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaGxkMTExMUBnLmNvbSIsImlhdCI6MTYwODE5MzkxOSwiZXhwIjoxNjA4MjAxMTE5fQ.BHAZnhjgzKvaVSCp8YdTS4Pe5-dQSFOTLTQtUT3-uPI'


const signIn = async () => {
  try {
      const response = await axios.post(HOST+'/auth/signin', {
          email,
          username,
          password,
      })
      // console.log('response ', response);
      const {data} = response;
      console.log('data', data);

  } catch (error) {
      console.log('err ', error);
  }
}



const refeshLogin = async () => {
try {
    const response = await axios.post(HOST+'/auth/refresh', {           
        // refeshToken
    })
    // // console.log('response ', response);
    // const {data} = response;
    // console.log('data', data);
    // console.log('response accesstoken', (response.headers));
    // console.log('response refeshToken', JSON.stringify(response.headers));

} catch (error) {
    console.log('err ', error);
}
}




function App() {


  
	return (
		<div className="App">
      <h1>HTTP ONLY COOKIE DEMO</h1>
			<div className="box">
        <button className="button green" onClick={signIn}>signIn</button>
        <button className="button yellow" onClick={refeshLogin}>refeshLogin</button>
        {/* <button className="button red" onClick={deleteCookie}>Delete Cookie</button> */}
      </div>
		</div>
	);
}

export default App;
