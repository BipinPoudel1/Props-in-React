import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const NoMarvel = () => {
  return (
    <>
      <Card
        sname={Sdata[0].sname}
        imgSrc={Sdata[0].imgSrc}
        title={Sdata[0].title}
        link={Sdata[0].link}
      />

      <Card
        sname={Sdata[4].sname}
        imgSrc={Sdata[4].imgSrc}
        title={Sdata[4].title}
        link={Sdata[4].link}
      />
    </>
  );
};

export default NoMarvel;