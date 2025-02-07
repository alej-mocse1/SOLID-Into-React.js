// import React from "react";
import styles from "./D.module.css"
import HighlightComponent from "../../component/Highlight/Highlight";
import AdditionalResourcesComponent from "../../component/AdditionalResources/AdditionalResources";
import { Link } from "react-router-dom";


const D = () => {

    
    const example: string = `  import { fetchUserData } from "./userService";

    const UserDashboard = () => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            fetchUserData().then((data) => setUser(data));
        }, []);

        return (
            <div>
              {user ? <h1>Bienvenido, {user.name}</h1> : <p>Cargando...</p>}
            </div>
        );
    };
    `;
    
    
    const example2: string = `    interface UserDashboardProps {
        fetchUser: () => Promise<{ name: string }>;
        }

    const UserDashboard = ({ fetchUser }: UserDashboardProps) => {
        const [user, setUser] = useState<{ name: string } | null>(null);

        useEffect(() => {
            fetchUser().then((data) => setUser(data));
        }, [fetchUser]);

        return <div>{user ? <h1>Bienvenido, {user.name}</h1> : <p>Cargando...</p>}</div>;
    };`;


    const example3: string = `    const fetchFromAPI = async () => {
        const response = await fetch("/api/user");
        return response.json();  
        };

    const fetchFromLocalStorage = async () => {
         return { name: localStorage.getItem("username") || "Invitado" };
        };

        // Usamos diferentes fuentes de datos según lo necesitemos
        <UserDashboard fetchUser={fetchFromAPI} />;
        <UserDashboard fetchUser={fetchFromLocalStorage} />;
        `;
    

    return(
        <>
          <h1 className={styles.h1Style}> PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS </h1>

          <h3 className={styles.h3Zize}>Principio de Inversión de Dependencias es uno de los cinco principios de SOLID, que significa:</h3>

          {/* <b>El Principio de Inversión de Dependencias (Dependency Inversion Principle - DIP) establece que:</b> */}

          <p>
            Los módulos de alto nivel no deberían depender de los módulos de bajo nivel. Ambos deben depender de abstracciones.
          </p>

          <p>
            Este principio fue introducido por el reconocido autor y científico de la computación Robert C. Martin
          </p>

          <p>
            Esto significa que las dependencias concretas no deben estar directamente acopladas a los módulos principales. En React, 
            podemos aplicar este principio utilizando props, contextos, hooks o inyección de dependencias para evitar acoplamientos innecesarios.
          </p>

          <Link to='https://dev.to/mikhaelesa/dependency-inversion-principle-in-react-5287'><li>Recurso</li></Link>

          <h3 className={styles.h3Zize}>En React.js</h3>

          <p>
             Supongamos que tenemos un componente UserDashboard que directamente importa y usa un servicio para obtener datos del usuario:
          </p>

          <HighlightComponent textPlane={example}/>

          <b>Problemas con este enfoque</b>

        <ul>
            <li>❌ UserDashboard está directamente acoplado a fetchUserData.</li>
            <li>❌ Si queremos cambiar la fuente de datos (por ejemplo, usar GraphQL en lugar de REST), tendríamos que modificar UserDashboard, lo que rompe el principio de inversión de dependencias.</li>
        </ul>

         <h3 className={styles.h3Zize}>Aplicando el Principio de Inversión de Dependencias</h3>

         <p>Para solucionar esto, pasamos la función de obtención de datos como una dependencia externa (abstracción) mediante props:</p>

         <HighlightComponent textPlane={example2}/>

         <p>Ahora UserDashboard no está acoplado a un servicio específico. Podemos usarlo con diferentes fuentes de datos sin modificar el componente:</p>

         <HighlightComponent textPlane={example3}/>
{/* 
         <b>Mejoras con este enfoque</b>

        <ul>
          <li>✅ Menos acoplamiento: UserInfo solo se preocupa por mostrar la información del usuario.</li>
          <li>✅ Mayor reutilización: LogoutButton puede usarse en cualquier parte de la app sin depender de UserDashboard.</li>
          <li>✅ Fácil de mantener: Si queremos cambiar la autenticación, solo modificamos LogoutButton, sin tocar UserInfo.</li>
        </ul> */}

         
          <AdditionalResourcesComponent/>

        </> 
    )

}



export default D;