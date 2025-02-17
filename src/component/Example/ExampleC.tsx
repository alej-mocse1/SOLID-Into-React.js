// import { useEffect, useState } from "react";


// const ExampleComponent = (props) => {

//     return( <button  {...props} style={{ backgroundColor: "blue", color: "white" }} /> )
// }


// export default ExampleComponent





// interface UserInfoProps {
//     username: string;
//     email: string;
// }

// interface AuthProps {
//     isAuthenticated: boolean;
//     logout: () => void;
// }

// const UserInfo = ({ username, email }: UserInfoProps) => {
//     return (
//         <div>
//         <h1>Bienvenido, {username}</h1>
//         <p>Email: {email}</p>
//         </div>
//     );
// };

// const LogoutButton = ({ isAuthenticated, logout }: AuthProps) => {
//     if (!isAuthenticated) return null;
//     return <button onClick={logout}>Cerrar sesión</button>;
// };

// const UserDashboard = (props: UserInfoProps & AuthProps) => {
//     return (
//         <div>
//         <UserInfo username={props.username} email={props.email} />
//         <LogoutButton isAuthenticated={props.isAuthenticated} logout={props.logout} />
//         </div>
//     );
// };


// export default UserDashboard;





// interface UserDashboardProps {
//     fetchUser: () => Promise<{ name: string }>;
//     }

// const UserDashboard = ({ fetchUser }: UserDashboardProps) => {
//     const [user, setUser] = useState<{ name: string } | null>(null);

//     useEffect(() => {
//         fetchUser().then((data) => setUser(data));
//     }, [fetchUser]);

//     return <div>{user ? <h1>Bienvenido, {user.name}</h1> : <p>Cargando...</p>}</div>;
// };


// export default UserDashboard;


