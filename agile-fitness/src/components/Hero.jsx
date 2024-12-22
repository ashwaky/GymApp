import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Agile<span className="text-blue-400">Fitness</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Using <span className="font-medium text-blue-400">AgileFitness</span>{" "}
        means I might become{" "}
        <span className="font-medium text-blue-400">seriously fit</span> (and
        possibly too strong for my own good). I understand I could{" "}
        <span className="font-medium text-blue-400">outgrow clothes</span>,
        struggle to{" "}
        <span className="font-medium text-blue-400">fit through doors</span>,
        and maybe even be mistaken for someone who{" "}
        <span className="font-medium text-blue-400">
          lifts everything in sight
        </span>
        . I accept all risks of leveling up my fitness, knowing it’s my
        responsibility to keep things in check. I’m ready to get started!
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}
