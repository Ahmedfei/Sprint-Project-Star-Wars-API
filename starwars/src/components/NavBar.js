import React, { Component } from 'react';
import {Menu, Container} from "semantic-ui-react"
import { Link } from "react-router-dom";

export default function NavBar(){
   return(
<Menu inverted>
    <Container>
<Link to="/">
<Menu.Item  name="HOME"/>
</Link>

<Link to="/people" >
<Menu.Item  name="PEOPLE"/>
</Link>

<Link to="/planets">
<Menu.Item  name="FILMS"/>
</Link>







    </Container>

</Menu>





   );
}