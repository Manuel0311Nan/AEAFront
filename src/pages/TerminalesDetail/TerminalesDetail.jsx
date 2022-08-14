import React from 'react'
import Detail from '../Terminales/Detail/Detail'

const TerminalesDetail = (props) => {


  return (
    <section>
          <Detail>
                logo={props.logo}
                name={props.name}
                entrada={props.entrada}
                image={props.image}
        </Detail>
    </section>
  )
}

export default TerminalesDetail