import logoImg from "../images/1.png";

const Proposals = () => {
  return (
    <section className="my-20">
      <h1 className="text-white text-3xl tracking-wider text-center underline decoration-wavy underline-offset-8">
        PROPOSALS
      </h1>
      <img src={logoImg} alt="logo" className="h-28 mx-auto my-10" />
      <p className="text-center text-lg text-slate-900">No proposals, yet.</p>
    </section>
  );
};

export default Proposals;
