import React, { Component } from 'react';

import {Card, Grid, GridColumn } from "semantic-ui-react"

export default function Films(props){
    
    return(
    <>
    <p className="p1">LIST OF FILMS</p>
    {props.films.map((film) => (
    
        
    
        
        
        <div className="content">  
    <Card>  
        
    <h3>{film.title}</h3>
     
    </Card>
    <Card>
    <p>{film.producer}</p>
    </Card>
    <Card>
    <p>{film.episode_id}</p>
    </Card>
    
    </div>
    
    
    
    
    
    
    
    
    ))}
    
    
    
    </>
    )}