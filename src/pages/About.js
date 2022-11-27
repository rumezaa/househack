import BG from "../images/about.svg";
import pic from "../images/about-pic.png";
import Transparency from "../images/transparency.svg";
import Quality from "../images/quality.svg";
import Manage from "../images/management.svg";
import help1 from "../images/stress.png";
import help2 from "../images/scam.png";
import help44 from "../images/individual.png";
import help3 from "../images/debt.png";
import { useState } from "react";

function About() {
  const [stress, showStress] = useState(false);
  const [scam, showScam] = useState(false);
  const [debt, showDebt] = useState(false);
  const [help4, showhelp4] = useState(false);
  return (
    <div className="text-center">
      <div
        style={{ backgroundImage: `url('${BG}')` }}
        className="w-full h-96 bg-contain bg-no-repeat flex flex-row items-center px-10"
      />

      <h2 className="text-4xl font-bold">
        "Real estate investing has{" "}
        <span className="font-bold text-orange-b">NEVER</span> been this easy"
      </h2>
      <div className="flex flex-row justify-between items-center px-20 py-20">
        <h2 className="pl-20 w-1/2 text-2xl">
          Housing unaffordability in Canada has reached <b>record highs</b> with{" "}
          <span className="text-orange-b">1 in 4 millennials</span> believing
          they will never own a home. We aim to play a key role in eradicating
          the barriers to allow Canadians of all segments to invest in real
          estate.
        </h2>
        <div>
          <img src={pic} width={400} />
        </div>
      </div>

      <div className="flex flex-row gap-28 items-center justify-center px-20 py-20">
        <div className="flex flex-col text-2xl font-bold">
          <div
            style={{ backgroundImage: `url('${Transparency}')` }}
            className="w-56 h-96 bg-contain bg-no-repeat transition duration-500 ease-in-out transform hover:scale-105"
          />
          <h2>100% Transparency</h2>
        </div>

        <div className="flex flex-col text-2xl font-bold">
          <div
            style={{ backgroundImage: `url('${Manage}')` }}
            className="w-64 h-96 bg-contain bg-no-repeat transition duration-500 ease-in-out transform hover:scale-105"
          />
          <h2>Quality Property Upkeep</h2>
        </div>

        <div className="flex flex-col text-2xl font-bold">
          <div
            style={{ backgroundImage: `url('${Quality}')` }}
            className="w-64 h-96 bg-contain bg-no-repeat transition duration-500 ease-in-out transform hover:scale-105"
          />
          <h2>Duty-free management</h2>
        </div>
      </div>

      <div className="flex flex-col pt-36 pb-20">
        <h2 className="text-3xl font-bold">What We're Advocating For</h2>
        <div className="flex flex-row w-full gap-10 px-20 justify-center align-items-center items-center text-center pt-20">
          <div
            className="w-4/5 h-96 border-black flex flex-row items-center text-center  border-2 rounded-md bg-cover bg-no-repeat transition duration-500 ease-in-out transform hover:scale-105"
            style={{ backgroundImage: stress || `url(${help1})` }}
            onMouseEnter={() => showStress(true)}
            onMouseLeave={() => showStress(false)}
          >
            <h2
              className={
                (!stress &&
                  "text-base text-5xl flex h-full text-start text-black font-bold px-10") ||
                "hidden"
              }
            >
              Reducing Stressful Mortgage Barriers
            </h2>
            <h2 className={(stress && "text-base ") || "hidden"}>
              Obtaining mortgages is very difficult as traditional institutions
              skew in favor of high income earners and present additional
              barriers to those with moderate incomes, median credit and self
              employed individuals. Our platform eliminates all these barriers
              and is 100% based on the size of your personal investment.
            </h2>
          </div>

          <div
            className="w-4/5 h-96 border-black flex flex-row items-center text-center  border-2 rounded-md bg-cover bg-no-repeat transition duration-500 ease-in-out transform hover:scale-105"
            style={{ backgroundImage: scam || `url(${help2})` }}
            onMouseEnter={() => showScam(true)}
            onMouseLeave={() => showScam(false)}
          >
            <h2
              className={
                (!scam &&
                  "text-base text-5xl flex h-full text-start font-bold px-10 text-white") ||
                "hidden"
              }
            >
              Reduces Systemically Sketchy Realtor Incentives
            </h2>
            <h2 className={(scam && "text-base") || "hidden"}>
              Realtors are paid on commission - the more a prospective buyer
              spends, the more they earn. In a hot, bidding war market, this
              grey area becomes exacerbated, creating sketchy incentives where
              realtors may urge their own clients to pay over market price. Our
              team of professionals mitigates this problem by having in house
              realty professionals that conduct purchases with due diligence
              based on comparable sales and market analysis.
            </h2>
          </div>
        </div>

        <div className="flex flex-row w-full gap-10 px-20 justify-center align-items-center items-center text-center pt-10">
          <div
            className="w-4/5 h-96 border-black flex flex-row items-center text-center  border-2 rounded-md bg-cover bg-no-repeat transition duration-500 ease-in-out transform hover:scale-105"
            style={{ backgroundImage: debt || `url(${help3})` }}
            onMouseEnter={() => showDebt(true)}
            onMouseLeave={() => showDebt(false)}
          >
            <h2
              className={
                (!debt &&
                  "text-base text-5xl flex h-full text-start font-bold px-10 text-black") ||
                "hidden"
              }
            >
              Appreciation Without Overleveraging Debt and Poor Tenant Screening
            </h2>
            <h2 className={(debt && "text-base") || "hidden"}>
              The overwhelming stress of taking on massive loan can lead to
              problems such as poor tenant screening. House Hack allows one to
              invest based on comfort levels and diversify within different
              Canadian markets with a property management team that conduct
              thorough tenant screenings based on credit and employment history
              to ensure that your investment is protected and growing.
            </h2>
          </div>

          <div
            className=" flex flex-row w-full items-center text-center w-4/5 h-96 border-black border-2 rounded-md bg-cover bg-no-repeat transition duration-500 ease-in-out transform hover:scale-105"
            style={{ backgroundImage: help4 || `url(${help44})` }}
            onMouseEnter={() => showhelp4(true)}
            onMouseLeave={() => showhelp4(false)}
          >
            <h2
              className={
                (!help4 &&
                  "text-base text-5xl flex h-full text-start font-bold px-10 text-white") ||
                "hidden"
              }
            >
              Individualized Due Diligence and Investment (Unlike a REIT)
            </h2>
            <h2 className={(help4 && "text-base") || "hidden"}>
              One of the most commonly asked questions is how we are different
              from a REIT (Real Estate Investment Trust). To put it simply,
              REITS can be looked at as a real estate mutual fund. On the other
              hand, House Hack allows an investor to individually tour
              properties that they are interested in and decide where they
              specifically wish to invest based on geographical preferences,
              investment goals and risk tolerance.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
