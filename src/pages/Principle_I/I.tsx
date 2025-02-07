// import React from "react";
import styles from "./I.module.css";
import HighlightComponent from "../../component/Highlight/Highlight";
import AdditionalResourcesComponent from "../../component/AdditionalResources/AdditionalResources";
import { Link } from "react-router-dom";


const I = () => {

    const example: string = `  interface UserDashboardProps {
        username: string;
        email: string;
        isAuthenticated: boolean;
        logout: () => void;
    }

  const UserDashboard = ({ username, email, isAuthenticated, logout }: UserDashboardProps) => {
        return (
            <div>
            <h1>Bienvenido, {username}</h1>
            <p>Email: {email}</p>
            {isAuthenticated && <button onClick={logout}>Cerrar sesión</button>}
            </div>
        );
    };
`;
    
    const example2: string = `   interface UserInfoProps {
        username: string;
        email: string;
    }

    interface AuthProps {
        isAuthenticated: boolean;
        logout: () => void;
    }

    const UserInfo = ({ username, email }: UserInfoProps) => {
        return (
            <div>
            <h1>Bienvenido, {username}</h1>
            <p>Email: {email}</p>
            </div>
        );
    };

    const LogoutButton = ({ isAuthenticated, logout }: AuthProps) => {
        if (!isAuthenticated) return null;
        return <button onClick={logout}>Cerrar sesión</button>;
    };

    const UserDashboard = (props: UserInfoProps & AuthProps) => {
        return (
            <div>
            <UserInfo username={props.username} email={props.email} />
            <LogoutButton isAuthenticated={props.isAuthenticated} logout={props.logout} />
            </div>
        );
    };
    `;
    

    return(
        <>
          <h1 className={styles.h1Style}>PRINCIPIO DE SEGREGACIÓN DE INTERFACES</h1>

          <h3 className={styles.h3Zize}>Principio de Segregación de Interfaceses es uno de los cinco principios de SOLID, que significa:</h3>

          <p>Un sistema no debe depender en cosas que no necesita.</p>
 
          <p>
            Este principio fue introducido por el reconocido autor y científico de la computación Robert C. Martin
          </p>

          <p>
            argumentó que las interfaces más pequeñas y específicas son más fáciles de entender, implementar y mantener. Al diseñar interfaces de esta manera, 
            se evita que las clases dependan de métodos que no utilizan y se promueve un acoplamiento más bajo entre las diferentes partes de un sistema.
          </p>

          <Link to='https://keepcoding.io/blog/que-es-principio-de-segregacion-de-la-interfaz/'><li>Recurso</li></Link>

          <h3 className={styles.h3Zize}>En React.js</h3>

          <p>
             En React, el ISP se puede aplicar dividiendo componentes grandes en interfaces o props más pequeñas y específicas. Esto evita que los componentes reciban props 
             que no necesitan y mejora la reutilización del código.  
          </p>

          <p>Supongamos que tenemos un componente UserDashboard que recibe varias props para manejar tanto la información del usuario como la autenticación:</p>

          <HighlightComponent textPlane={example}/>

          <b>Problemas con este enfoque</b>

          <ul>
            <li>❌ El componente UserDashboard recibe props relacionadas con la autenticación (isAuthenticated y logout), aunque su función principal es mostrar información del usuario.</li>
            <li>❌ Si en el futuro queremos mostrar el usuario en otro lugar sin autenticación, estaremos obligados a pasar props que no necesita.</li>
        </ul>

          
         <h3 className={styles.h3Zize}>Aplicando el Principio de Segregación de Interfaces en React</h3>

         <p>Podemos separar las responsabilidades creando interfaces más pequeñas:</p>

         <HighlightComponent textPlane={example2}/>
      
         <b>Mejoras con este enfoque</b>

        <ul>
        <li>✅ Menos acoplamiento: UserInfo solo se preocupa por mostrar la información del usuario.</li>
        <li>✅ Mayor reutilización: LogoutButton puede usarse en cualquier parte de la app sin depender de UserDashboard.</li>
        <li>✅ Fácil de mantener: Si queremos cambiar la autenticación, solo modificamos LogoutButton, sin tocar UserInfo.</li>
        </ul>

         
          <AdditionalResourcesComponent/>

        </> 
    )

}

export default I;