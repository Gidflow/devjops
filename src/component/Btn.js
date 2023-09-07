import React from 'react'

const Btn = ({loadMore}) => {
  return (
    <div>
        <div className='button'>
        <button>{loadMore}</button>
    </div>
    </div>
  )
}

export default Btn