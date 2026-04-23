import "./noticias.css";

export default function Noticias() {
  const noticias = [
    {
      titulo: "Ondas gigantes em Nazaré impressionam surfistas",
      descricao:
        "Surfistas do mundo todo se reuniram em Nazaré para encarar ondas gigantes que ultrapassaram 20 metros.",
      imagem: "https://img.redbull.com/images/c_crop,w_5471,h_2733,x_0,y_139/c_auto,w_1200,h_630/f_auto,q_auto/redbullcom/2016/11/29/1331831987514_2/nazare-big-set",
    },
    {
      titulo: "Brasil se destaca no campeonato mundial de surf",
      descricao:
        "Atletas brasileiros conquistam posições importantes no ranking mundial, reforçando a força do país no surf.",
      imagem: "https://s2-ge.glbimg.com/Fkms-_OR6b5hn-LhtV0rnu7-kbg=/0x0:4000x2667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/5/S/Ttj1D4Rn6EL0J9Y3J4gQ/20141219-gabrielmedinatrophy4348pipe-kirstin.jpg",
    },
    {
      titulo: "Novas pranchas revolucionam o desempenho no mar",
      descricao:
        "Tecnologia e design inovador estão mudando a forma como os surfistas encaram as ondas.",
      imagem: "https://i0.wp.com/pranchanova.com/wp-content/uploads/2020/06/Melhores-Pranchas-Para-O-Dia-A-Dia.png?fit=960%2C480&ssl=1",
    },
  ];

  return (
    <section className="noticias">
      <h2>🌊 Notícias do Surf</h2>

      <div className="grid">
        {noticias.map((n, index) => (
          <div className="card" key={index}>
            <img src={n.imagem} alt={n.titulo} />
            <div className="card-content">
              <h3>{n.titulo}</h3>
              <p>{n.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}