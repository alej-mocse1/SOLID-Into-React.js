// import React from "react";
import { Link } from "react-router-dom";


const AdditionalResourcesComponent = () => {   

    return(
       <ul>
          <Link to='https://legacy.reactjs.org/docs/hooks-intro.html'><li>Introducing Hooks</li></Link>
          <Link to='https://legacy.reactjs.org/docs/hooks-reference.html'><li>Hooks API Reference</li></Link>
          <Link to='https://itequia.com/es/domina-react-mejores-practica'><li>Mejores Prácticas para Diseñar Componentes de Alto Rendimiento</li></Link>
       </ul>
    )
}


export default AdditionalResourcesComponent;    