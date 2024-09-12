import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">

      <header className="flex justify-around bg-red-700 p-2  ">
        <h1 className="text-white font-bold text-2xl">SENAI News</h1>
        <nav className="flex gap-16 ">
        <a  className="text-white font-bold" href="#">Home</a>
        <a  className="text-white font-bold" href="#">Sobre</a>
        <a  className="text-white font-bold" href="#">Contato</a>
        </nav>
      </header>

      <main className="mx-7 flex-1 m-9">
        <h2 className="mt-4 text-xl font-semibold p-6">Principais notícias:</h2>
        <div className="flex justify-around flex-wrap gap-8">

          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-800 p-2  w-80">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYvmm4EVuuulZww-r0QpbAtvmkJC7xhMliw&s " alt="Imagem 1" />
            <h3 className="font-bold mt-2 ">Galo é apreendido após cantar durante a madrugada em Ivaiporã, diz PM</h3>
            <p className="font-medium text-xs mt-2">Morador chamou a polícia para denunciar dono do animal, que precisou assinar um termo circunstanciado. Galo foi recolhido pela Secretaria de Meio Ambiente, nesta segunda</p>
            <a className="bg-red-700 p-2 w-full text-center text-white border-2 border-gray-800 text-sm mt-2" href="">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-800 p-2  w-80">
            <img src="https://s2-oglobo.glbimg.com/AVsJifumdzi5egFKycEmYX8dJxA=/0x0:725x389/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/G/s/2Me6T4T3GZYZtJKIAvBA/abordagem-policial.jpg " alt="Imagem 1" />
            <h3 className="font-bold mt-2 ">Homem é preso após falar que mãe de policial nasceu pelada</h3>
            <p className="font-medium text-xs mt-2">Durante uma abordagem, um senhor que estava passando começou a discutir com um PM e, durante a discussão, disse que a mãe do policial nasceu pelada e careca.</p>
            <a className="bg-red-700 p-2 w-full text-center text-white border-2 border-gray-800 text-sm mt-2" href="">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-800 p-2  w-80">
            <img src="https://i.ytimg.com/vi/D40ve7Y4R4k/maxresdefault.jpg " alt="Imagem 1" />
            <h3 className="font-bold mt-2 ">Optimus Prime se nega a pagar IPVA e vai parar no pátio</h3>
            <p className="font-medium text-xs mt-2">Após se recusar a pagar o IPVA, o Transformer conhecido como Optimus Prime é guinchado e vai parar em um pátio em SP.</p>
            <a className="bg-red-700 p-2 w-full text-center text-white border-2 border-gray-800 text-sm mt-2" href="">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-800 p-2  w-80">
            <img src="https://br.web.img2.acsta.net/r_654_368/newsv7/15/10/27/19/23/105013.jpg" alt="Imagem 1" />
            <h3 className="font-bold mt-2 ">Chewbacca é preso ao fazer campanha política para Darth Vader na Ucrânia</h3>
            <p className="font-medium text-xs mt-2">Parece que Chewbacca debandou para o "lado negro" da força. A inusitada aliança aconteceu na Ucrânia,onde Chewbacca foi preso na cidade de Odessa, no país Europeu, no último domingo, fazendo boca de urna para... Darth Vader.</p>
            <a className="bg-red-700 p-2 w-full text-center text-white border-2 border-gray-800 text-sm mt-2" href="">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-800 p-2  w-80">
            <img src="https://i.pinimg.com/236x/09/94/a3/0994a38981124ba09634c8ee34abdc63.jpg " alt="Imagem 1" />
            <h3 className="font-bold mt-2 ">Canguru rouba celular e tira foto em frente o espelho</h3>
            <p className="font-medium text-xs mt-2">Durante uma excursão na Austrália, um rapaz tem seu celular roubado por um canguru e se surpreende ao recuperar o aparelho.</p>
            <a className="bg-red-700 p-2 w-full text-center text-white border-2 border-gray-800 text-sm mt-2" href="">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-800 p-2  w-80">
            <img src="https://thumbs.dreamstime.com/b/um-homem-come-batatas-fritas-e-pora-suco-de-laranja-careca-adulto-comendo-em-luvas-derramando-desfocagem-249837411.jpg" alt="Imagem 1" />
            <h3 className="font-bold mt-2 ">Produto usado nas batatas do McDonald`s pode curar a calvície</h3>
            <p className="font-medium text-xs mt-2">Os nutrientes secretos encontrados nas receitas clássicas, combinados com a felicidade instantânea que um McLanche proporciona, têm o poder de estimular os folículos capilares e revitalizar os cabelos de forma quase mágica. </p>
            <a className="bg-red-700 p-2 w-full text-center text-white border-2 border-gray-800 text-sm mt-2" href="">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-800 p-2  w-80">
            <img src="https://super.abril.com.br/wp-content/uploads/2018/07/maconha_site.jpg?quality=70&strip=info&w=1000&h=601&crop=1 " alt="Imagem 1" />
            <h3 className="font-bold mt-2 ">Netflix cria variedades de maconha inspiradas em séries de sucesso</h3>
            <p className="font-medium text-xs mt-2">Aquela tradicional pipoca que acompanha as séries da Netflix pode acabar sendo substituída, ou complementada, por maconha criada pela própria companhia. O conjunto de variedades de cannabis batizado... </p>
            <a className="bg-red-700 p-2 w-full text-center text-white border-2 border-gray-800 text-sm mt-2" href="">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-800 p-2  w-80">
            <img src="https://dolanguenews.com.br/wp-content/uploads/2023/10/messi-fak-pesca-mt.jpg" alt="Imagem 1" />
            <h3 className="font-bold mt-2 ">É #Fake imagem de Messi pescando no interior do Mato Grosso</h3>
            <p className="font-medium text-xs mt-2">A imagem estava circulando na Web e em confiáveis grupos de WhatsApp por alguns internautas. No Instagram, milhares de internautas disseram acreditar na imagem. Outros confirmaram até ter presenciado a pesca do argentino pessoalmente.</p>
            <a className="bg-red-700 p-2 w-full text-center text-white border-2 border-gray-800 text-sm mt-2" href="">Ver mais</a>
          </div>
         
         
          
        </div>
      </main>

      <footer className="felx">
        <h4 className="text-center bg-red-700 text-white ">Todos os direitos reservados - 2024</h4>
      </footer>
    </div>
  );
}

export default App;
