const GovernanceProposal = () => {
  return (
    <section className="mx-5 my-20">
      <h1 className="text-white text-xl sm:text-3xl tracking-wider text-center underline decoration-wavy underline-offset-8">
        GOVERNANCE PROPOSAL
      </h1>
      <div className="md:grid md:grid-cols-10 mt-10">
        <div></div>
        <div className="glass px-8 sm:px-16 py-12 col-span-8">
          <p className="sm:text-lg text-white">
            As a member, you can make proposals related to the governance of
            Karamela.
          </p>
          <p className="sm:text-lg text-white mt-5">
            Describe in full so that others can make an informed decision. You
            may also provide any additional supporting materials to explicate
            your proposal.
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

export default GovernanceProposal;
