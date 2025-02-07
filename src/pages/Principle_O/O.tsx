// import React from "react";
import styles from "./O.module.css";
import HighlightComponent from "../../component/Highlight/Highlight";
// import { Link } from "react-router-dom";
import AdditionalResourcesComponent from "../../component/AdditionalResources/AdditionalResources";



const O = () => { 


    const example: string = `  const Button = () => {
        const handleClick = () => {
            alert("Botón clickeado");
        };
    
        return <button onClick={handleClick}>Hacer algo</button>;
        };
    
        export default Button;`;


    const example2: string = `  const Button = ({ onClick, text }) => {
        return <button onClick={onClick}>{text}</button>;
        };

        // Uso del botón con diferentes funciones
  export default function App() {
        // Definimos diferentes funciones para manejar los clics
        const showAlert = () => alert("Se hizo clic en el botón");
        const logMessage = () => console.log("Mensaje en la consola");
       const customAction = () => alert("Acción personalizada ejecutada");

        return (
            <div>
            <Button onClick={showAlert} text="Mostrar Alerta" />
            <Button onClick={logMessage} text="Log en Consola" />
            <Button onClick={customAction} text="Acción Personalizada" />
            </div>
        );
    }`;    


    return(
        <>
         <h1 className={styles.h1Style}>PRINCIPIO DE ABIERTO/CERRADO (OPEN/CLOSED PRINCIPLE, OCP)</h1>

         <h3 className={styles.h3Zize}>Este principio establece que Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para extensión, pero cerradas para su modificación.</h3>
        
         <p>
            En el desarrollo de software, esto significa que el comportamiento de una entidad debe poder expandirse sin necesidad de modificar su código fuente. Si cada vez que queremos agregar una nueva 
            funcionalidad debemos modificar el código existente, aumentamos el riesgo de introducir errores y de afectar el funcionamiento del sistema. Aplicar el OCP nos permite mejorar la mantenibilidad y escalabilidad del software,
            ya que nuevas funcionalidades pueden incorporarse mediante la extensión de las entidades existentes en lugar de alterar su implementación original.
         </p> 

         <h3 className={styles.h3Zize}>En React.js</h3>

         <p>
            El Principio de Abierto/Cerrado (Open/Closed Principle, OCP) establece que los componentes deben estar abiertos para la extensión pero cerrados para la modificación. En React,
            esto significa que en lugar de modificar componentes existentes cada vez que hay un cambio en la funcionalidad, deberíamos hacerlos flexibles y reutilizables mediante props, 
            composición y render props.
         </p>

         <p>Supongamos que tenemos un botón que realiza una acción fija cuando se hace clic.</p>   

         <HighlightComponent textPlane={example}/>

         <b>Problemas con este enfoque</b>

        <ul>
           <li>❌ Cada vez que queremos que el botón haga algo diferente, tenemos que modificar su código.</li>
           <li>❌ No es reutilizable para distintas acciones, ya que la lógica está fija dentro del componente.</li>
           <li>❌ Rompe el OCP, porque cada nueva acción requiere cambiar la implementación del botón.</li>
        </ul>

        <h2 className={styles.h2Zize}>¿Como podemos aplicar el Principio de Abierto/Cerrado en React?</h2>

        <HighlightComponent textPlane={example2}/>

        <b>Mejoras con este enfoque</b>

        <ul>
           <li>✅ El comportamiento del botón es completamente flexible, ya que cada botón puede ejecutar una acción distinta sin modificar su estructura.</li>
           <li>✅ El código es reutilizable, ya que el mismo componente Button se puede usar en diferentes partes de la aplicación con distintas acciones.</li>
           <li>✅ Separa la lógica de UI y comportamiento, aplicando el principio de responsabilidad única (SRP) junto con el OCP.</li>
        </ul>

        <p>
          En resumen aplicar el Principio de Abierto/Cerrado (OCP) en un botón nos permite reutilizarlo con diferentes comportamientos sin modificar su código base,
          lo que hace que nuestra aplicación sea más flexible, escalable y mantenible.
        </p>

        <h3 className={styles.h3Zize}>Recursos adicionales</h3>
    
        <AdditionalResourcesComponent/>

        </>
    )
}


export default O;