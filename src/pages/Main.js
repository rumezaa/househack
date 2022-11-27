import React from "react";
import BG from "../images/bg-2.svg";

function Main() {
  return (
    <div>
      <div
        className="w-full bg-cover bg-no-repeat flex flex-row items-center px-10"
        style={{
          backgroundImage: `url('${BG}')`,
          height: "600px",
        }}
      >
        <div className="text-7xl text-white font-extrabold flex flex-col gap-6">
          <h2>
            Invest and own<br/>property in{" "}
            <span className="text-black">2 clicks</span>.
          </h2>

          <h2 className="text-3xl font-thin">
            Barrier-free investing without needing prior knowledge
          </h2>
          <a href="/properties" className="hover:bg-gradient-to-r hover:from-white border-2 border-light-b rounded-md text-2xl tracking-wider font-light flex flex-col px-4 py-2 justify-center items-center w-1/2 text-center">
            START INVESTING
          </a>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}

export default Main;
