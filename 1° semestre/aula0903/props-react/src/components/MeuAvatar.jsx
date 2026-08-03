function MeuAvatar(props) {
  return (
    <div>
      <img src={props.foto} alt="Foto de perfil" width="150" />

      <h2>Nome: {props.nome}</h2>
      <p>Idade: {props.idade}</p>
      <p>Estilo musical: {props.estiloMusical}</p>
      <p>Disciplina favorita: {props.disciplina}</p>
    </div>
  )
}

export default function MeuAvatar(props){
    return(
        <>
        <h2>{props.nome}</h2>
        <h3>{props.idade}</h3>
        <img src={props.foto} alt="" />
        
        </>
    )
}