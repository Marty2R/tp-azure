import Img from "@/componants/Img.jsx";
import Header from "@/componants/Header.jsx";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div>
          <h1>
            Hi !
            <br />
            I'm <span>Nooman</span>,
            <br />
            I'm a developer.
          </h1>
          <button>Contact</button>
        </div>
        <Img />
      </main>
    </>
  );
}
