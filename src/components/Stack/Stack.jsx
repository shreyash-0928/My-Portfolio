import { useState } from "react";
import html from "../../assets/icons/html5-original.svg";
import css from "../../assets/icons/css3-original.svg";
import js from "../../assets/icons/javascript-original.svg";
import tailwind from "../../assets/icons/tailwindcss-plain.svg";
import react from "../../assets/icons/react-original.svg";
import redux from "../../assets/icons/redux-icon.svg";
import SingleStack from "../SingleStack/SingleStack";
import github from "../../assets/icons/github-icon.svg";
import figma from "../../assets/icons/figma.svg"
import "./Stack.css";

function Stack() {
  const [stack, setStack] = useState([
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: js },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "ReactJS", icon: react },
    { name: "Redux", icon: redux },
    { name: "GitHub", icon: github },
    { name: "Figma", icon: figma },
  ]);

  const mappedStack = stack.map(({ icon, name }) => {
    return <SingleStack key={name} icon={icon} name={name} />;
  });
  return (
    <section className="stack">
      <div className="stack-inner">
        <h1 id="stack">TECH STACK</h1>

        <div className="stack-container">{mappedStack}</div>
      </div>
    </section>
  );
}

export default Stack;
