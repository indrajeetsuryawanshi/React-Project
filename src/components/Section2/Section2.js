import React from 'react'
import Line2 from '../Line2/Line2'
import "./Section2.css"
const Section2 = (props) => {
  return (
   
    
        <section className='ss'>
            <h6>Address</h6>
            <Line2 label="Street" line={props.detail.location.street.name}/>
            <Line2 label="City" line={props.detail.location.city}/>
            
            <Line2 label="State" line={props.detail.location.state}/>
            
            <Line2 label="Postcode" line={props.detail.location.postcode}/>
            <Line2 label="Phone" line={props.detail.phone}/>
            
            </section>
           
            
     
  
    
  )
}

export default Section2
