import React, { Component } from 'react';
import {Card, Grid, GridColumn } from "semantic-ui-react"
import "../index.css"



export default function People(props){
    
return(
<>
<p className="p1">STAR WARS CHARACTERS</p>
{props.people.map((person) => (

    

    
    
    <div className="content">  
<Card>  
    
<h3>{person.name}</h3>
 
</Card>
<Card>
<p>{person.height}</p>
</Card>
<Card>
<p>{person.mass}</p>
</Card>

</div>








))}



</>
)}