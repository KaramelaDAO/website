import { Link } from "react-router-dom";
import { BsStopwatch } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import logoImg from "../images/1.png";

const governanceList = [
  {
    id: 1,
    img: logoImg,
    private: "private",
    approved: "approved",
    progressBar: "2%",
    progressBar2: "0%",
  },
  {
    id: 2,
    img: logoImg,
    private: "private",
    approved: "approved",
    progressBar: "28%",
    progressBar2: "0%",
  },
  {
    id: 3,
    img: logoImg,
    private: "private",
    approved: "approved",
    progressBar: "16%",
    progressBar2: "0%",
  },
  {
    id: 4,
    img: logoImg,
    private: "private",
    approved: "approved",
    progressBar: "36%",
    progressBar2: "0%",
  },
  {
    id: 5,
    img: logoImg,
    private: "private",
    approved: "approved",
    progressBar: "25%",
    progressBar2: "0%",
  },
  {
    id: 6,
    img: logoImg,
    private: "private",
    approved: "approved",
    progressBar: "23%",
    progressBar2: "0%",
  },
];

const Governance = () => {
  return (
    <section className="mx-5 lg:mx-8 xl:mx-12 2xl:mx-32 my-20">
      <h1 className="text-white text-3xl tracking-wider text-center underline decoration-wavy underline-offset-8">
        GOVERNANCE
      </h1>
      <div className="text-right mt-3">
        <Link to="/governance-proposal">
          <button className="px-5 py-3 my-10 text-white text-right bg-gradient-to-r from-pink-600 to-rose-400 rounded-md shadow-xl transition duration-300 ease-in-out hover:scale-105">
            New Proposal
          </button>
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-white">APPROVED</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {governanceList.map((governance) => (
          <div key={governance.id} className="glass-govern p-5">
            <div>
              <img
                src={governance.img}
                alt="logo"
                className="object-fill h-20 mx-auto"
              />
            </div>

            <h1 className="text-white text-center text-2xl mt-5 capitalize">
              {governance.private}
            </h1>

            <div className="flex items-center justify-center space-x-2 mt-5">
              <BsStopwatch className="text-2xl text-emerald-900" />
              <h1 className="uppercase text-xl text-emerald-900">
                {governance.approved}
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-1 mt-8">
              <div>
                <div className="w-full bg-gray-200 h-3">
                  <div
                    className="bg-blue-600 h-3"
                    style={{ width: `${governance.progressBar}` }}
                  ></div>
                </div>
                <p className="mt-4 text-lg text-blue-900 flex items-center justify-center">
                  <TiTick className="text-2xl" /> {governance.progressBar}
                </p>
              </div>
              <div>
                <div className="w-full bg-gray-200 h-3">
                  <div
                    className="bg-pink-600 h-3"
                    style={{ width: `${governance.progressBar2}` }}
                  ></div>
                </div>
                <p className="text-center text-lg text-pink-700 mt-4">
                  {governance.progressBar2}
                </p>
              </div>
            </div>
            <button className="py-3 mt-10 uppercase tracking-widest w-full text-white text-lg bg-blue-600 rounded-md">
              review
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Governance;
