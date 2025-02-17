// import React from "react";
import styles from "./L.module.css";
import HighlightComponent from "../../component/Highlight/Highlight";
import AdditionalResourcesComponent from "../../component/AdditionalResources/AdditionalResources";

const L = () => {

    const example: string = ` function BotonBase({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
 }`;


    const example2: string = ` function BotonPrimario(props) {
  return <BotonBase {...props} style={{ backgroundColor: "blue", color: "white" }} />;
 }`;


    const example3: string = ` function App() {
  return (
    <div>
      <BotonBase onClick={() => alert("Base")}>Botón Base</BotonBase>
      <BotonPrimario onClick={() => alert("Primario")}>Botón Primario</BotonPrimario>
    </div>
  );
 }`;

    return(
        <>
          <h1 className={styles.h1Style}>PRINCIPIO DE SUSTITUCIÓN DE LISKOV</h1>

          <h3 className={styles.h3Zize}>El principio de Sustitución de Liskov es uno de los cinco principios de SOLID, que significa que:</h3>

          <p>Para construir sistemas de software con partes intercambiables, esas partes se deben adherir a un contrato que permita que esas partes puedan ser reemplazadas por otras.</p>
 
          <p>
             Debemos a Barbara Liskov la definición de este patrón en 1988.
          </p>

          <h3 className={styles.h3Zize}>En React.js</h3>
          <p>
            El Principio de Sustitución de Liskov (LSP) se aplica cuando trabajamos con componentes reutilizables y herencia de props.

              El principio establece que un componente hijo debe poder sustituir a su componente padre sin alterar el comportamiento esperado de la aplicación.   
          </p>

          <p>Imagina que tienes un componente BotonBase que es reutilizable:</p>

          <HighlightComponent textPlane={example}/>

          <p>Luego, creamos un BotonPrimario que extiende BotonBase pero mantiene su comportamiento esperable:</p>

          <HighlightComponent textPlane={example2}/>

          <b>Este diseño respeta LSP porque BotonPrimario puede sustituir a BotonBase sin romper el código.</b>

          <p>Ejemplo de uso:</p>

          <HighlightComponent textPlane={example3}/>

          <p>
             En React, LSP se respeta cuando los componentes derivados mantienen el mismo contrato de props y comportamiento esperado que sus componentes base.

             Si un componente hijo rompe la lógica esperada (como ignorar onClick en un botón), entonces estamos violando el principio LSP y necesitamos corregirlo para que el código sea más flexible y mantenible.
          </p>
         
         <AdditionalResourcesComponent/>

        </> 
    )
}



export default L;