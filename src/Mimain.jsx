import React from 'react'
import img1 from './assets/foto1.png';
import Child from './components/Child'

const fruits = ['aple', 'manzana']

export const Mimain = () => {
  return (
    <div>
        <h1>mi main</h1>
        <img src={img1} alt="foto1"  />
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
        <Child msg="asdsd"/>   
    </div>
  )
}
