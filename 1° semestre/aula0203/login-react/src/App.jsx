import './App.css'
import logoSesi from '../assets/img/sesi.jpg'; //importandoimg
import logoSenai from '../assets/img/senai.png';

export default function App() {

return (
  <>
<div className = 'container'>
<img src={logoSesi} alt="logo do sesi" className = "logo" />
<img src={logoSenai} alt="logo do snai" className = "logo" />
<h1 className = "titulo">login</h1>
<span className = "subtitulo">para continuar</span>
<label htmlFor= "nome" className='label'>nome</label>
<input type='text' className='campo' id='nome' placeholder='seu nome'/>
<label htmlFor= "senha" className='label'>senha</label>
<input type='text' className='campo' id='senha' placeholder='sua senha'/>
<button className='botao'>log in</button>
<span className='textoFooter'>esqueceu a senha?</span>
<span className='textoFooter'>cadastre-se</span>
</div>
    </>

)

}

//export default App