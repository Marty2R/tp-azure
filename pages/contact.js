import Header from "@/componants/Header.jsx";

export default function About() {
  return (
    <>
      <Header></Header>

      <main>
        <h1 className="title">Contact me !</h1>

        <form>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="E-mail"></input>
          <textarea placeholder="Your message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}
