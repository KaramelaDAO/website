import React from "react";
import MainButton from "../components/Buttons/MainButton";
import HollowButton from "../components/Buttons/HollowButton";
import eyeIcon from "../assets/icons/eye-icon.svg";
import heartIcon from "../assets/icons/heart-icon.svg";
import mouthIcon from "../assets/icons/mouth-icon.svg";
import karamelaIcon from "../assets/icons/karamela-icon.svg";

const Token = () => {
  return (
    <section className="h-[100vh] w-full flex items-center justify-center">
      <div className="w-[80%] h-[70%] 2xl:h-[50%] bg-transparent relative">
        <img
          src={eyeIcon}
          alt="Eye Icon"
          className="h-[100px] absolute -top-16 md:left-14"
        />
        <img
          src={heartIcon}
          alt="Heart Icon"
          className="h-[100px] absolute -top-12 -right-12"
        />
        <img
          src={karamelaIcon}
          alt="Karamela Icon"
          className="h-[100px] absolute bottom-24 sm:bottom-[-2.875rem] -right-8 sm:right-14"
        />
        <img
          src={mouthIcon}
          alt="Mouth Icon"
          className="h-[100px] absolute -bottom-12 md:-bottom-6 -left-12 z-10"
        />
        <div className="w-[100%] h-[100%] frost-bg flex flex-col items-center justify-evenly">
          <h4 className="text-base font-semibold text-[#00C65E] uppercase">
            Introducing
          </h4>
          <p className="text-3xl text-center md:text-4xl 2xl:text-5xl font-semibold">
            Our token,  <a target="_blank" class="underline" href="https://wiki.karameladao.com/organization/token"> Lollipop ($loll)</a>
          </p>

          <div className="flex flex-col md:flex-row">
            <a target="_blank" class="underline" href="https://dex.karameladao.com/"> <MainButton text="Convert $Loll to $ETH" /> </a>
            <a target="_blank" class="underline" href="https://app.dework.xyz/karameladao/bounties-23">  <HollowButton text="Earn $Loll by working for the DAO" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
