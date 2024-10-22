export default function NuevoUsuario(){
    return(
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1 >Nuevo Usuario</h1>
                    </div>
                    <div className="car-body">
                        <input className="form-control mb-3" id="nombre" autoFocus type="text" />
                        <input className="form-control mb-3" id="usuario"  type="text" />
                        <input className="form-control mb-3" id="password" type="text" />
                    </div>
                    <div className="car-footer">
                        <button className="btn btn-primary col-12">Guardar nuevo ususario</button>
                    </div>
                </div>
            </form>
        </div>
    );
}