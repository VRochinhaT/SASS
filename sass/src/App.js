import React from "react";
import "./css/normalize.css";
import "./css/estilos.css";
import "./css/media-queries.css";
import FotoPost from "./imagens/foto-post.jpg";

function App() {
  return (
    <>
      <header>
        <div class="container">
          <h1>
            <img src="imagens/logo.png" alt="Logotipo Apeperia" />
          </h1>
          <nav class="menu-opcoes">
            <ul>
              <li>
                <a href="#">sobre</a>
              </li>
              <li>
                <a href="#">planos</a>
              </li>
              <li>
                <a href="#">blog</a>
              </li>
              <li>
                <a href="#">contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section class="destaque">
        <div class="container">
          <p>Aplicativos sob medida, para pequenas e médias empresas</p>

          <p>
            A Apeperia é o jeito inovador de se comprar apps, você assina um
            plano, nós criamos os apps e fazemos toda a manutenção!
          </p>

          <button>Conheça nossos planos</button>
        </div>
      </section>

      <section class="sobre">
        <div class="container">
          <h2 class="titulo-secao">Sobre</h2>
          <div class="duas-colunas">
            <h3>O que fazemos</h3>

            <p>
              No Apeperia, nós criamos aplicativos personalizados de uma maneira
              diferente, preocupados com o modelo atual em que um aplicativo é
              criado entregue e a manutenção é vista como um custo extra para o
              cliente, decidimos criar um novo modelo de negocios, em que você
              assina nosso serviço, nós criamos o aplicativo e a manutenção já é
              inclusa no serviço, dessa maneira você não se preocupa em ter o
              app sempre na versão mais atualizada.
            </p>

            <p>
              Com equipes especializadas, equipes exclusivas para projetos
              especiais agora é a hora da sua empresa ter o próprio aplicativo
              com qualidade.
            </p>

            <h3>Múltiplas plataformas</h3>

            <p>
              Na Apeperia não temos preconceito com nenuma plataforma, fazemos
              apps fantásticos para qualquer device!
            </p>

            <p>
              Não importa se você quer um app para iOS, Android, Windows Phone
              ou Blackberry. Nós sabemos fazer!
            </p>

            <ul class="plataformas">
              <li>Apple</li>
              <li>Android</li>
              <li>Windows Phone</li>
              <li>BlackBerry</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="planos">
        <div class="container">
          <h2 class="titulo-secao">Planos</h2>
          <div class="plano">
            <h3>Plano Básico</h3>
            <div>R$ 500,00</div>
            <ul class="itens-plano">
              <li>
                Aplicativos<span>1</span>
              </li>
              <li>
                Manutenções Programadas<span>5</span>
              </li>
              <li>
                Helpdesk 24hs<span class="icone-x"></span>
              </li>
              <li>
                App SEO<span class="icone-check"></span>
              </li>
              <li>
                Atendente Exclusivo<span class="icone-x"></span>
              </li>
              <li>
                Sistema Operacional<span>1</span>
              </li>
            </ul>
            <button class="btn-padrao">Comprar</button>
          </div>
          <div class="plano">
            <h3>Plano Enterprise</h3>
            <div>R$ 1500,00</div>
            <ul class="itens-plano">
              <li>
                Aplicativos<span>3</span>
              </li>
              <li>
                Manutenções Programadas<span>20</span>
              </li>
              <li>
                Helpdesk 24hs<span class="icone-check"></span>
              </li>
              <li>
                App SEO<span class="icone-check"></span>
              </li>
              <li>
                Atendente Exclusivo<span class="icone-x"></span>
              </li>
              <li>
                Sistema Operacional<span>3</span>
              </li>
            </ul>
            <button class="btn-padrao">Comprar</button>
          </div>
          <div class="plano">
            <h3>Plano Corporation</h3>
            <div>R$ 9500,00</div>
            <ul class="itens-plano">
              <li>
                Aplicativos<span>5</span>
              </li>
              <li>
                Manutenções Programadas<span>∞</span>
              </li>
              <li>
                Helpdesk 24hs<span class="icone-check"></span>
              </li>
              <li>
                App SEO<span class="icone-check"></span>
              </li>
              <li>
                Atendente Exclusivo<span class="icone-x"></span>
              </li>
              <li>
                Sistema Operacional<span>6</span>
              </li>
            </ul>
            <button class="btn-padrao">Comprar</button>
          </div>
        </div>
      </section>

      <section class="blog">
        <div class="container">
          <h2 class="titulo-secao">Blog</h2>
          <section class="post-destaque">
            <article>
              <img src="imagens/foto-post.jpg" alt="" />
              <h3>iOS ou Android?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus soluta fugiat officia consectetur quas rem ducimus
                recusandae repellat quaerat dignissimos nam iure, voluptatem ex
                atque pariatur molestiae maiores, ea nulla!
              </p>
            </article>
          </section>
          <section class="posts-antigos">
            <a href="#">Postagens antigas</a>
            <article>
              <h3>Resoluções de iPhones</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt architecto libero officia ut molestias culpa velit
                consequuntur quae.
              </p>
            </article>
            <article>
              <h3>Blackberry morreu?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt architecto libero officia ut molestias culpa velit
                consequuntur quae.
              </p>
            </article>
            <article>
              <h3>Nokia + Microsoft = 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt architecto libero officia ut molestias culpa velit
                consequuntur quae.
              </p>
            </article>
          </section>
        </div>
      </section>

      <section class="contato">
        <div class="container">
          <h2 class="titulo-secao">Contato</h2>
          <form action="">
            <input type="text" placeholder="Digite seu nome..." />
            <input type="email" placeholder="Digite seu e-mail..." />
            <input type="text" placeholder="Digite o assunto..." />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensagem..."
            />

            <button>Enviar</button>
          </form>
        </div>
      </section>

      <footer>
        <div class="container">
          <img src="imagens/logo.png" alt="" />
          <nav class="menu-rodape">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Planos</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>

          <ul class="social">
            <li>
              <a href="http://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="http://www.twitter.com">Twitter</a>
            </li>
            <li>
              <a href="http://www.instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
