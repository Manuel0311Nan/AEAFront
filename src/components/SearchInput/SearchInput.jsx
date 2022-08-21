import React from 'react'

export const SearchInput = ({...rest}) => {
  return (
    <div className=" container d-flex  justify-content-center">

      <input {...rest} className="my-1 align-content-center" />

    </div>
  )
}
