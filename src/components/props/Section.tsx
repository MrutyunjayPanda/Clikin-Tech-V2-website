import React from "react";

interface SectionProps {
  heading: string;
  para: string;
  src: string
}

const Section: React.FC<SectionProps> = (props) => {
 const { heading, para, src } = props;
  return (
    <>
      <a
        className=" w-400px block mr-60px rounded-xl border border-gray-800 p-10 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:bg-white hover:border-gray-800 bg-yellow"
        href="/services/digital-campaigns"
      >
        <img src={src} alt="" className="h-10 w-10 text-pink-500" />
        <h2 className="py-3 text-2xl font-bold text-slate-800">{heading}</h2>

        <p className="pt-1 text- leading-7 text-blacky">{para}</p>
      </a>
    </>
  );
}

export default Section;
