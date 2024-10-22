import axios from "axios";
async function getUsuarios(){
    const url="http://localhost:3000/"
    const usuarios=await axios.get(url);
    //console.log(usuarios.data);
    return usuarios.data;

}
export default async function Usuarios(){
    const usuarios=await getUsuarios();
    return(
        <>
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario,i)=>(
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.usuario}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}