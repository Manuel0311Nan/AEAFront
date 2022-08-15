import React from 'react'
import Detail from '../Terminales/Detail/Detail';
import { useParams } from 'react-router-dom';


const TerminalesDetail = (props) => {
  console.log(props)
  return (
    <section>
      <h1>Hola</h1>
      <h2>{ props.props.name}</h2>
          {/* <Detail>
                logo={props.logo}
                name={props.name}
                entrada={props.entrada}
                image={props.image}
        </Detail> */}
    </section>
  )
}

export default TerminalesDetail