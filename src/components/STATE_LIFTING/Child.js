import React from 'react'

const Child = (props) => {

    const data2 = 'I am from Child Component'

    props.childdata(data2);

  return (
    <div>
      {/* <h1>This is Child Component.</h1> */}
      <h3>{props.data}</h3>
      
    </div>
  )
}

export default Child
