// import React from "react";
import styles from "./S.module.css";
import HighlightComponent from "../../component/Highlight/Highlight";
// import { Link } from "react-router-dom";
import AdditionalResourcesComponent from "../../component/AdditionalResources/AdditionalResources";

const S = () => { 

    const example: string = ` import { useEffect, useState } from "react";
    const UserList = () => {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            setUsers(data);
            setLoading(false);
          });
      }, []);

      if (loading) return <p>Cargando...</p>;

      return (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    };

    export default UserList;`;


    const example2: string = ` import { useEffect, useState } from "react";

    const useUsers = () => {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => {
            setUsers(data);
            setLoading(false);
          });
      }, []);

      return { users, loading };
    };

    export default useUsers;`


    const example3: string = ` import useUsers from "./useUsers";

  const UserList = () => {
    const { users, loading } = useUsers();

    if (loading) return <p>Cargando...</p>;

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  };

    export default UserList;`


  return (
    <>
      <h1 className={styles.h1Style}>PRINCIPIO DE RESPONSABILIDAD ÚNICA</h1>
      <h3 className={styles.h3Zize}>El Principio de Responsabilidad Única es uno de los cinco principios de SOLID, que significa que:</h3>
      <div className={styles.divFather}>	
        <p>
          Este principio establece que una clase debe tener una única razón
          para cambiar, es decir, debe tener solo una responsabilidad dentro del sistema.
        </p> 

        <p>
          En el desarrollo de software, cada módulo, clase o función debe estar enfocada en una única tarea o responsabilidad. Si una clase maneja múltiples responsabilidades, se vuelve 
          más difícil de entender, mantener y probar. Además, cualquier cambio en una de sus responsabilidades puede afectar a las demás, lo que incrementa la fragilidad del código.
          El SRP se basa en la idea de que cada actor o grupo de usuarios debe tener su propio conjunto de responsabilidades en el sistema. Si una clase tiene más de una razón para 
          cambiar, significa que está asumiendo más de una responsabilidad y debe dividirse en varias clases más especializadas.
        </p>

        <h3 className={styles.h3Zize}>En React.js</h3>

        <p>
          En React.js, el Principio de Responsabilidad Única (SRP) se aplica organizando los componentes de manera que cada uno tenga una única responsabilidad. Un componente no debería 
          encargarse de múltiples tareas como manejar lógica de negocio, hacer llamadas a una API y renderizar la UI al mismo tiempo.
        </p>
        
        <p>
          Si llamamos a una API directamente dentro de un componente, este se vuelve difícil de mantener y probar. La solución es separar la lógica en un Hook personalizado, 
          lo que nos da varios beneficios.
        </p>

        <b>En resumen, este componente mezcla lógica de obtención de datos, estado y renderizado.</b>
      </div>

      <HighlightComponent textPlane={example}/>

     <h2 className={styles.h2Zize}>¿Como podemos aplicar SRP en React?</h2>

     <b>Podemos separar las responsabilidades en</b>

      <ul>
        <li>✅ Un Hook para obtener los datos.</li>
        <li>✅ Un componente que solo renderiza la UI.</li>
      </ul>

      <h3 className={styles.h3Zize}>1) Hook para obtener usuarios</h3>

      <p>
         En este ejemplo definimos un hook personalizado en React llamado useUsers, que se encarga de obtener datos de una API y gestionar el estado de carga de los datos.
         De esta manera estamos descacoplando la logica de la llamada a la api del componente principal para de estar forma poder cumplir con este principio
      </p>

      <HighlightComponent textPlane={example2}/>


      <h3 className={styles.h3Zize}>2) Un componente que solo renderiza la UI.</h3>

      <p>
        El componente UserList es un componente de presentación en React, lo que significa que su única responsabilidad es renderizar la UI con los datos que recibe.
        No maneja lógica de negocio, ni obtiene datos, sino que usa un hook (useUsers) que se encarga de esa parte.
      </p>

      <HighlightComponent textPlane={example3}/>

      <h3 className={styles.h3Zize}>Beneficios:</h3>
    
      <ul>
        <li>Reutilización: Podemos usar el mismo hook en diferentes componentes</li>
        <li>Separación de responsabilidades: El hook maneja la lógica, y el componente solo renderiza.</li>
        <li> Código más limpio y organizado: Facilita el mantenimiento y escalabilidad.</li>
      </ul>


      <h3 className={styles.h3Zize}>Recursos adicionales</h3>
    
     <AdditionalResourcesComponent/>
    </>
  );
}

export default S;