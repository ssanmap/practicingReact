import React from 'react'

const Child = (props) => {
    console.log(props)
  return (
    <div>Child {props.msg}</div>
  )
}

export default Child