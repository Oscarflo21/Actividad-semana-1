import logo from './logo.svg';
import './App.css';
import Perfil from'./componentes/Perfil';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mis desarrolladores favoritos son</h1>
        <Perfil
          nombre='Brais Moure'
          pais=' España'        
          imagen='brais'
          cargo='Ingeniero de software'
          empresa='MoureDev'
          perfil='Es un Youtuber español, fundador de la empresa de desarrollo MoureDev.
          MoureDev es el reflejo de la ilusión por crecer como profesional dentro de la 
          industria del desarrollo del software. Como freelance, se ha especializado en 
          desarrollo de aplicaciones iOS, Android y web'
          linkedin='https://www.linkedin.com/in/brasimoure/'
          youtube='https://www.youtube.com/@mouredev'
          twitter='https://www.twitter.com/Mouredev'
        />
        <Perfil
          nombre='Lucas Moy'
          pais=' Argentina'        
          imagen='lucas'
          cargo='Ingeniero de software'
          empresa='ATL Academy'
          perfil='Es un Youtuber Argentino radicado en españa, fundador de ATL Academy.
          Durante varios años ha compartido sus conocimientos de programación en YouTube.
          Ha varios cursos y bootcamp meticulosamente para que cualquier persona, sin conocimientos
          previos, pueda adentrarse de manera amena y eficiente en este fascinante mundo de
          la programación.'
          linkedin='https://www.linkedin.com/pub/dir/Lucas/Moy/'
          youtube='https://www.youtube.com/@atl.academy'
          twitter='https://twitter.com/LucasMoy_dev/status/1678428356495265794'
        />
      </div>
    </div>
  );
}
export default App;
