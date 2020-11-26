import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';


const customers = [ 
                    {
                      'id' : 1,
                      'image' : 'https://placeimg.com/64/64/1',
                      'name' : '나귀정',
                      'brithday' : '961222',
                      'gender' : '남자',
                      'job' : '대학생'
                    },
                    {
                      'id' : 2,
                      'image' : 'https://placeimg.com/64/64/2',
                      'name' : '홍길동',
                      'brithday' : '790428',
                      'gender' : '남자',
                      'job' : '프로그레머'
                    },
                    {
                      'id' : 3,
                      'image' : 'https://placeimg.com/64/64/3',
                      'name' : '박나래',
                      'brithday' : '951212',
                      'gender' : '여자',
                      'job' : '개그맨'
                    }
]


class App extends Component{
  

  render(){
   
    return(
      <div>
        { customers.map(c => { return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} brithday={c.brithday}  gender={c.gender} job={c.job} />); }) }
      </div>

    );
  }
}


export default App;
