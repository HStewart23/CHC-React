import React from 'react';

const StalkComp = ({ id }) => {

    let order = "";
    if (id < 3){
      order = "first"
    }
    else if (id < 6){
      order = "second"
    }
    else if (id < 9){
      order = "third"
    }
    else {order="fourth"}
    return (
      <div className={order}>
        <div className= "stalk" key={id} ></div>
      </div>
    )
  }

export default StalkComp
