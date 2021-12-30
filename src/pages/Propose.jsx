const Propose = () => {
  return (
    <section className="mx-5 my-20">
      <h1 className="text-white text-3xl tracking-wider text-center underline decoration-wavy underline-offset-8">
        PROPOSAL
      </h1>
      <div className="md:grid md:grid-cols-10 mt-10">
        <div></div>
        <div className="glass px-8 sm:px-16 py-12 col-span-8">
          <p className="sm:text-lg text-white">
            Make a proposal to other members of Karamela. Just fill out the
            information below.
          </p>
          <p className="sm:text-lg text-white mt-5">
            If you have any questions, check out our FAQs.
          </p>
          <p className="text-center sm:text-lg text-slate-900 mt-10">
            Connect your wallet to an active member address to submit a
            proposal.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Propose;
