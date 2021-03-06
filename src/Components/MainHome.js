import React from 'react';

import artorias from '../img/artorias-dark-souls-art.jpg'
import prota from '../img/prota.png'
import prota1 from '../img/prota1.jpg'
import ornstein from '../img/dark-souls-ornstein.jpg'
import reyes from '../img/4reyes.jpg'
import manus from '../img/manus.jpg'



function Home() {
  return (
    <>
    <main className="container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ artorias }className="d-block w-100" alt="img_pru"></img>

          </div>
          <div className="carousel-item">
            <img src={ prota } className="d-block w-100" alt="img_pru"></img>

          </div>
          <div className="carousel-item">
            <img src={ prota1 }className="d-block w-100" alt="img_pru"></img>

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      {/* <div className="card mb-3">
        <img src="https://media.vandal.net/i/1200x630/5-2020/20205199491727_1.jpg" className="card-img-top" alt="img_pru"></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto earum eum veritatis sed et deserunt quibusdam, doloribus repudiandae, iure praesentium, fugit totam! Eveniet omnis dolor dignissimos, asperiores non labore iure, provident debitis commodi, repudiandae quae similique pariatur quis libero maiores. Maiores pariatur distinctio laboriosam consectetur eveniet inventore quo vero quia, rem, optio molestiae perferendis consequuntur? Quam dolorum corrupti, similique reiciendis ratione, error, iusto nemo temporibus saepe repellendus distinctio. Id illum voluptatem, molestiae sed fugiat, esse dignissimos possimus hic expedita laudantium quidem perspiciatis voluptate tenetur ut pariatur quo at ullam. Soluta deserunt necessitatibus dolorum laborum rem, similique dolores incidunt maxime.</p>

        </div>
      </div> */}



      <article className="blog-post">
        <h2 className="blog-post-title">Dark Souls</h2>

        <p>Dark Souls (?????????????????? D??ku Souru?) es un videojuego de rol de acci??n, desarrollado por la empresa From Software para las plataformas PlayStation 3, PlayStation 4, Xbox 360 y Microsoft Windows, distribuido por Namco Bandai Games. Anteriormente conocido como Project Souls, es el segundo videojuego de la serie Souls. Su lanzamiento fue el 22 de septiembre de 2011 en Jap??n, 4 de octubre en Norteam??rica, 6 de octubre de 2011 en Australasia y 7 de octubre de 2011 en Europa. El 24 de agosto de 2012, se lanz?? la edici??n Prepare to Die para PC, presentando contenido adicional previamente inaccesible para los usuarios de PlayStation 3 y Xbox 360. El 23 de octubre de 2012, el contenido adicional de la versi??n PC fue publicado como contenido descargable para consolas bajo el t??tulo Artorias of the Abyss. Dark Souls tiene lugar en el reino ficticio de Lordran. Los jugadores toman el papel de un personaje humano no-muerto que ha sido elegido para realizar un peregrinaje para descubrir el destino de los no muertos. El argumento de Dark Souls se va contando fundamentalmente a trav??s de descripciones de objetos del juego, y di??logos con personajes no jugables (PNJs). Los jugadores deben ir reuniendo pistas para poder entender la historia. Dark Souls se labr?? un gran reconocimiento por su extenuante dificultad e implacable desaf??o. El mundo de juego est?? lleno de armas, armaduras y objetos consumibles que tienen como objetivo ayudar al jugador durante su viaje.</p>
        
        
        {/* <h2>Descripci??n</h2>

        <p>El juego tiene lugar en los ??ltimos d??as de la Edad del Fuego, la cual comenz?? tras la derrota de los Dragones de Piedra que anteriormente reinaban el mundo. Durante esta ??poca el mundo era un lugar oscuro y l??gubre habitado solamente por una raza inmortal de dragones cuya capacidad de prolongar su vida eternamente proven??a de sus escamas p??treas. En esta ??poca aparentemente no exist??a a??n ninguna llama, por lo que el mundo era un lugar completamente oscuro, amorfo y casi desierto. As?? fue hasta que de la nada y sin nada que la provocase m??s que un ciclo natural, surgi?? la primera llama, un grupo de seres descubrieron en ella cuatro grandes almas, Nito el primer ser en morir, la bruja de Izalith y sus hijas del Caos, Gwyn el se??or de la ceniza y portador de el alma en teor??a m??s poderosa, y por ??ltimo el furtivo pigmeo portador de el Alma oscura y que desapareci?? poco despu??s de hacerse con la misma. Con el poder adquirido, Gwyn y los otros grandes se??ores(Nito y la bruja de Izalith) desafiaron a los dragones con la ayuda de los humanos como es revelado en Dark Souls 3 y posteriormente la ayuda de Seath, que ten??a cierta envidia a sus hermanos por este carecer de escamas eternas, y gracias a todo esto fue que Gwyn gan?? aquella gran guerra. Con todos estos acontecimientos empieza la historia de Dark Souls, repleta de secretos y que hasta d??a de hoy realmente no se ha podido dar una respuesta definitiva a la misma m??s que muchas teor??as al respecto</p> */}
      </article>



      <div className="card-group">
        <div className="card">
          <img src={ ornstein } alt="img_pru"></img>
          <div className="card-body">
            <h5 className="card-title">Ornstein</h5>
            <p className="card-text">Ornstein y Smough son uno de los jefes m??s dif??ciles del juego. Se caracterizan por ser los ??nicos jefes con dos variantes en el combate, ya que al matar a Ornstein primero, la fase final del combate ser?? contra un "Super Smough", y si el jugador mata a Smough primero, tendr?? que enfrentar a "Super Ornstein".</p>
          </div>
        </div>
        <div className="card">
          <img src={ reyes } className="card-img-top" alt="img_4reyes"></img>
          <div className="card-body">
            <h5 className="card-title">4 Reyes</h5>
            <p className="card-text">Los Cuatro reyes se encuentran en el Abismo, al que se accede a trav??s de las Ruinas de Nuevo Londo. El jugador debe adquirir primero la Llave sello que posee Ingward para drenar el agua de las ruinas, as?? como el Pacto de Artorias, un anillo obtenido de Sif el Gran lobo gris, para poder entrar con seguridad a la arena de combate.</p>
          </div>
        </div>
        <div className="card">
          <img src={ manus } className="card-img-top" alt="img_pru"></img>
          <div className="card-body">
            <h5 className="card-title">Manus(muy divertido este jefe)</h5>
            <p className="card-text">Manus, el padre del Abismo, es el origen del mal que ha acabado con Oolacile. Adem??s, la influencia de la oscuridad insondable se ha extendido por el mundo entero. En el futuro dar?? lugar a una lucha interminable, tanto contra una reina corrompida como entre los Vigilantes del Abismo y la propia entidad que luchan, pero por ahora, s??lo nos interesa saber c??mo acabar con ??l.. aunque sea temopralmente.</p>
          </div>

        </div>
      </div>

    </main>
    </>
  );
}

export default Home;
