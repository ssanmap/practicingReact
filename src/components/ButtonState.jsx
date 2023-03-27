import React, { useState } from 'react'

const ButtonState = () => {
  const [first, setfirst] = useState(0)
  const [second, setsecond] = useState(0);
  // setfirst(2)
  // setsecond(3)



    const handleClick = () => {
        setfirst(2)
        console.log('ButtonState clicked');
        console.log('first: ', first);
    }
    

  return (
    <button onClick={handleClick}>ButtonState</button>
  )
}

export default ButtonState