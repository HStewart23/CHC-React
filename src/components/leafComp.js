import React from 'react';

const LeafComp = ({id}) => {
  let order = "";
  if (id === 0){
    order = "ein"
  }
  else if (id === 1){
    order = "twee"
  }
  else if (id === 2){
    order = "drie"
  }
  return(
    <div className={order}>
      <div className="leaf" key={id}></div>
    </div>
  )
}


export default LeafComp
