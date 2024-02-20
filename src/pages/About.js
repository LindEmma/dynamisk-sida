import React from "react";

export default function About() {
  const changeBackgroundColor = () => {
    const myColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = myColor;
  };
  return (
    <div class="about-me-content">
      <article class="about-me">
        <section class="tex-about-me">
          <h1>Om mig</h1>
          <p>
            Mitt namn är Emma Lind och jag är en framtida systemutvecklare som
            studerar på Edugrade! Jag bor lantligt en bit utanför Hudiksvall
            tillsammans med min sambo, två döttrar och sibirkatten Bjäran.
            Egentligen är jag inte infödd hälsing (utan medelpading) men
            integreras sakta men säkert att äta riktig ostkaka och säga saker
            som “chalur” och “joll”.
          </p>
          <p>
            När jag inte har fullt upp med barn och hem (när är det liksom) kan
            det hända att jag hamnar på någon metalspelning eller historisk
            marknad (gärna en kombination). Men allra helst spenderas tiden
            hemma med familjen påtandes i trädgården, strövandes i naturen eller
            fast i ett klurigt pusselspel.
          </p>
          <p>
            Tidigare i livet var den stora passionen blommor, så pass att jag
            utbildade mig till florist och arbetade som det ett tag. Efter
            flytten bestämde jag mig för att skola om till systemutvecklare, men
            att binda buketter och kransar gör jag fortfarande på fritiden.
          </p>
          <p>
            Att börja programmera är bland det roligaste jag gjort, kanske för
            att man får kombinera sitt analytiska och kreativa sinne som allra
            bäst. Jag ser verkligen fram emot att fortsätta växa och utvecklas i
            detta yrke!
          </p>
        </section>
      </article>
    </div>
  );
}
