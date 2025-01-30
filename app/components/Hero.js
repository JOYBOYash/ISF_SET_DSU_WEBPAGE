import React from "react";
import effects from "@/app/styles/Effects.module.css";
import Button from "./Button";


function Hero(props) {
  return (
    <section
      id="hero"
      className="hero mt-24 h-[500px] items-center justify-center text-center flex flex-col text-center py-10 bg-blue-500 text-white"
    >
      <video
        src="../stock-vid.mp4"
        autoPlay
        loop
        muted
        className="video w-full relative -z-5 h-[500px] object-cover"
      />
      <div className="hero-contain absolute left-0 w-full h-[500px] backdrop-hue-rotate-60 items-center justify-center flex flex-col text-center bg-black/70 text-white">
        <img src="../isfsetlogo.png" className="h-36 w-36" />
        <h1 className="hero-title text-4xl font-bold">
          <span className={effects.typingEffect}> {props.title}</span>
        </h1>
        <p className="hero-desc mt-4 text-lg text-white/80">{props.desc}</p>
        <Button
          text={props.btntext}
          styleNav="false"
          link={
            props.btnlink
              ? props.btnlink
              : "https://forms.gle/pd5L2xxH4Bp9ozbt9"
          }
        />
        {props.showButton ? (
          <Button
            text="Dynamo (2K22-23)"
            styleNav="false"
            openNewTab
            link="https://drive.google.com/file/d/1tB-VqJWX4d4d7Yoj_X2C8-mk_E6ybwsy/view?usp=sharing"
          />
        ) : null}
      </div>
    </section>
  );
}

export default Hero;
