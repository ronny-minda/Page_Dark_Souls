import React from 'react';


function Programador() {
  return (

    <main className="container">
        <div className="bg-dark text-secondary px-4 py-5 text-center Progra">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">Creador de esta pagina</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">Esta pagina esta creada con <b>Bootstrap</b> y <b>React</b> con la tematica del videojuego Dark Souls(extremadamente bueno este videojuego).<br></br>Bueno un poco sobre los proyectos que he hecho o en los que estoy actualmente y si tienes GitHub dame una estrellita 😁</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a href="https://ronny-minda.github.io/" type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" target="_blank" rel="noopener noreferrer">Mi Pagina Web</a>
                    <a href="https://github.com/ronny-minda" type="button" className="btn btn-outline-info btn-lg px-4" target="_blank" rel="noopener noreferrer"><b>GitHub</b></a>

                    </div>
                </div>
            </div>
        </div>
    </main>
    
  );
}

export default Programador;
