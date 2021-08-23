import React from 'react';

function Home() {
  return (
    <>
    <main class="container">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.alphacoders.com/278/thumb-1920-278051.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://images7.alphacoders.com/109/1098539.png" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://i.pinimg.com/originals/97/ba/d8/97bad88c884f4b7d6c334eb204cfeda1.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



      {/* <div class="card mb-3">
        <img src="https://media.vandal.net/i/1200x630/5-2020/20205199491727_1.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia architecto earum eum veritatis sed et deserunt quibusdam, doloribus repudiandae, iure praesentium, fugit totam! Eveniet omnis dolor dignissimos, asperiores non labore iure, provident debitis commodi, repudiandae quae similique pariatur quis libero maiores. Maiores pariatur distinctio laboriosam consectetur eveniet inventore quo vero quia, rem, optio molestiae perferendis consequuntur? Quam dolorum corrupti, similique reiciendis ratione, error, iusto nemo temporibus saepe repellendus distinctio. Id illum voluptatem, molestiae sed fugiat, esse dignissimos possimus hic expedita laudantium quidem perspiciatis voluptate tenetur ut pariatur quo at ullam. Soluta deserunt necessitatibus dolorum laborum rem, similique dolores incidunt maxime.</p>

        </div>
      </div> */}



      <article class="blog-post">
        <h2 class="blog-post-title">Dark Souls</h2>

        <p>Dark Souls (ダークソウル Dāku Souru?) es un videojuego de rol de acción, desarrollado por la empresa From Software para las plataformas PlayStation 3, PlayStation 4, Xbox 360 y Microsoft Windows, distribuido por Namco Bandai Games. Anteriormente conocido como Project Souls, es el segundo videojuego de la serie Souls. Su lanzamiento fue el 22 de septiembre de 2011 en Japón, 4 de octubre en Norteamérica, 6 de octubre de 2011 en Australasia y 7 de octubre de 2011 en Europa. El 24 de agosto de 2012, se lanzó la edición Prepare to Die para PC, presentando contenido adicional previamente inaccesible para los usuarios de PlayStation 3 y Xbox 360. El 23 de octubre de 2012, el contenido adicional de la versión PC fue publicado como contenido descargable para consolas bajo el título Artorias of the Abyss. Dark Souls tiene lugar en el reino ficticio de Lordran. Los jugadores toman el papel de un personaje humano no-muerto que ha sido elegido para realizar un peregrinaje para descubrir el destino de los no muertos. El argumento de Dark Souls se va contando fundamentalmente a través de descripciones de objetos del juego, y diálogos con personajes no jugables (PNJs). Los jugadores deben ir reuniendo pistas para poder entender la historia. Dark Souls se labró un gran reconocimiento por su extenuante dificultad e implacable desafío. El mundo de juego está lleno de armas, armaduras y objetos consumibles que tienen como objetivo ayudar al jugador durante su viaje.</p>
        
        
        {/* <h2>Descripción</h2>

        <p>El juego tiene lugar en los últimos días de la Edad del Fuego, la cual comenzó tras la derrota de los Dragones de Piedra que anteriormente reinaban el mundo. Durante esta época el mundo era un lugar oscuro y lúgubre habitado solamente por una raza inmortal de dragones cuya capacidad de prolongar su vida eternamente provenía de sus escamas pétreas. En esta época aparentemente no existía aún ninguna llama, por lo que el mundo era un lugar completamente oscuro, amorfo y casi desierto. Así fue hasta que de la nada y sin nada que la provocase más que un ciclo natural, surgió la primera llama, un grupo de seres descubrieron en ella cuatro grandes almas, Nito el primer ser en morir, la bruja de Izalith y sus hijas del Caos, Gwyn el señor de la ceniza y portador de el alma en teoría más poderosa, y por último el furtivo pigmeo portador de el Alma oscura y que desapareció poco después de hacerse con la misma. Con el poder adquirido, Gwyn y los otros grandes señores(Nito y la bruja de Izalith) desafiaron a los dragones con la ayuda de los humanos como es revelado en Dark Souls 3 y posteriormente la ayuda de Seath, que tenía cierta envidia a sus hermanos por este carecer de escamas eternas, y gracias a todo esto fue que Gwyn ganó aquella gran guerra. Con todos estos acontecimientos empieza la historia de Dark Souls, repleta de secretos y que hasta día de hoy realmente no se ha podido dar una respuesta definitiva a la misma más que muchas teorías al respecto</p> */}
      </article>



      <div class="card-group">
        <div class="card">
          <img src="https://www.wallpapertip.com/wmimgs/170-1700557_dark-souls-ornstein.jpg" alt="img_ornstein"></img>
          <div class="card-body">
            <h5 class="card-title">Ornstein</h5>
            <p class="card-text">Ornstein y Smough son uno de los jefes más difíciles del juego. Se caracterizan por ser los únicos jefes con dos variantes en el combate, ya que al matar a Ornstein primero, la fase final del combate será contra un "Super Smough", y si el jugador mata a Smough primero, tendrá que enfrentar a "Super Ornstein".</p>
          </div>
        </div>
        <div class="card">
          <img src="https://media.vandal.net/master/5-2018/2018571161_1.jpg" class="card-img-top" alt="img_4reyes"></img>
          <div class="card-body">
            <h5 class="card-title">4 Reyes</h5>
            <p class="card-text">Los Cuatro reyes se encuentran en el Abismo, al que se accede a través de las Ruinas de Nuevo Londo. El jugador debe adquirir primero la Llave sello que posee Ingward para drenar el agua de las ruinas, así como el Pacto de Artorias, un anillo obtenido de Sif el Gran lobo gris, para poder entrar con seguridad a la arena de combate.</p>
          </div>
        </div>
        <div class="card">
          <img src="https://cdn.wallpapersafari.com/30/85/atTruQ.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">Manus(muy divertido este jefe)</h5>
            <p class="card-text">Manus fue humano alguna vez; se convirtió en el Padre del Abismo cuando su humanidad enloqueció.</p>
          </div>

        </div>
      </div>

    </main>
    </>
  );
}

export default Home;