import React from "react";

function HomeUserContent() {
  return (
    <>
      {/* Primeira seção: explicação do sistema */}
      <section className="home-section">
        <div className="content-block">
          <h1 className="titulo">Como funciona nosso sistema web de avaliação?</h1>
          <p className="texto">
            Nosso sistema web permite que <span>estudantes do ensino superior</span> compartilhem suas experiências e avaliações sobre <span>cursos, matérias e Instituições de Ensino</span>. Dessa forma, <span>futuros ingressantes</span> têm acesso a <span>informações detalhadas e imparciais</span>, ajudando-os a tomar decisões mais bem fundamentadas sobre onde e o que estudar.
          </p>
          <p className="texto">
            Por trás desse sistema, há uma estrutura que conecta os estudantes a um <span>banco de dados seguro e organizado</span>. Quando um usuário acessa o site, ele interage com uma <span>interface intuitiva e amigável</span>, projetada para facilitar a navegação e a criação de avaliações.
          </p>
        </div>
        <div className="image-block">
          <img
            src="/img/university.jpg"
            alt="Estudantes em frente a uma universidade"
          />
        </div>
      </section>

      {/* Segunda seção: orientações para o aluno */}
      <section className="home-section reverse">
        <div className="image-block">
          <img
            src="/img/aluno.jpg"
            alt="Grupo de alunos conversando no campus"
          />
        </div>
        <div className="content-block">
          <h1 className="titulo">Para você aluno</h1>
          <h3 className="texto">O que você pode avaliar?</h3>
          <p className="texto">
            <span>Instituições:</span> Faça uma análise completa da sua universidade ou faculdade. Descreva como é o ambiente, os métodos de ensino e avalie desde a direção até os funcionários, destacando os pontos fortes e as áreas que precisam de melhoria.
          </p>
          <p className="texto">
            <span>Cursos:</span> Avalie o curso que você está cursando! Fale sobre a coordenação, a estrutura curricular e a interação entre os alunos.
          </p>
          <p className="texto">
            <span>Matérias:</span> Se desejar, você também pode avaliar matérias específicas. Informe como é a didática do professor, a abordagem dos conteúdos e o impacto da disciplina no curso.
          </p>
        </div>
      </section>
    </>
  );
}

export default HomeUserContent;