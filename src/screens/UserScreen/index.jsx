import './userScreen.css';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';

function UserScreen(){
    const user = [
        {
            id:1,
            name: " Julia Soares",
            email:"juliasoares@email.com"
        },
        {
            id:3,
            name:"Amanda Teles",
            email:"amada@email.com"
        },
        {
            id:4,
            name:"Conceiçao Jabota",
            email:"conceicao@email.com"
        }
    ]

    return(
        <>
            <Header title="Usuarios cadastrados"/>
            <main>
                {user.map(user=>
                    <UserCard 
                        key={user.id}
                        id={user.id} 
                        name={user.name}
                        email={user.email}
                    />
                )}
            </main>

        </>
    );
}

export default userScreen;