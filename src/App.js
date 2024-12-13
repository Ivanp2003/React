import logo from './logo.svg';
import './App.css';
import Foto from "./imagenes/Foto.jpg";

function App() {
  return (
    <div className="container">
    {/* Datos personales */}
    <section className="section">
      <h1>Datos Personales</h1>
      <img src={Foto} alt="Foto de  perfil" />
      <p><strong>Nombres:</strong> Iván Andrés Panchi Chávez</p>
      <p><strong>Dirección:</strong> Alpahuasi E3-13 y Pisque Quito, Ecuador</p>
      <p><strong>Teléfono:</strong> +593 98 551 0920</p>
      <p><strong>Correo Electrónico:</strong> andrespanchichavez@gmail.com</p>
    </section>

    {/* Estudios realizados */}
    <section className="section">
      <h1>Estudios Realizados</h1>
      <ol>
        <li>Bachillerato en Ciencias</li>
        <li>Certificación en curso de idiomas B1</li>
        <li>Tecnología Superior en Desarrollo de Software</li>
      </ol>
    </section>

    {/* Herramientas utilizadas */}
    <section className="section">
      <h1>Herramientas Utilizadas</h1>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
      </ul>
    </section>

    {/* Galería de deportes favoritos */}
    <section className="section gallery">
      <h1>Deportes Favoritos</h1>
      <div className="gallery-item">
        <img src="https://media.gettyimages.com/id/926641068/es/foto/madrid-spain-neymar-da-silva-santos-junior-neymar-jr-of-paris-saint-germain-fights-for-the-ball.jpg?s=2048x2048&w=gi&k=20&c=q2vTETZjS5SGZPB7FBEF7qM1aURtfmDj4pr4fpqGl4k=" alt="Fútbol" />
        <p>Fútbol</p>
      </div>
      <div className="gallery-item">
        <img src="https://combatkinetics.com/wp-content/uploads/2024/03/The-Anatomy-of-Knockouts-Understanding-Striking-in-MMA-1200x630.jpg" alt="Artes Marciales Mixtas" />
        <p>Artes Marciales Mixtas</p>
      </div>
      <div className="gallery-item">
        <img src="https://blog.marti.mx/wp-content/uploads/2022/11/natacion-deportiva-a-travez-del-tiempo-1024x683.jpg.webp" alt="Natación" />
        <p>Natación</p>
      </div>
    </section>
  </div>
  );
}

export default App;
