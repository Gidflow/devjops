import React from 'react';
import "./component.css"

const Card = ({data, logo}) => {
    const styles = {backgroundColor:data.logoBackground}
  return (
    <div className='card'>
      
      <div key={data.id} >
        <div className='logo' style={styles}>
        <img  src={logo} alt="icon"  />
        </div>
        <p><span>{data.postedAt}</span><span>.</span><span>{data.contract}</span></p>
        <h3>{data.position}</h3>
        <p>{data.company}</p>
        <div className='location'>
            <p>{data.location}</p>
        </div>
        </div>
    </div>
  )
}

export default Card