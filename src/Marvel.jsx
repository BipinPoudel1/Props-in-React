import React from 'react';
import Sdata from './Sdata';
import Card from './Cards'

const Marvel=()=>{
    return(
        <>
            <Card
          sname={Sdata[1].sname}
          imgSrc={Sdata[1].imgSrc}
          title={Sdata[1].title}
          link={Sdata[1].link}
        />

        <Card
          sname={Sdata[2].sname}
          imgSrc={Sdata[2].imgSrc}
          title={Sdata[2].title}
          link={Sdata[2].link}
        />

        <Card
          sname={Sdata[3].sname}
          imgSrc={Sdata[3].imgSrc}
          title={Sdata[3].title}
          link={Sdata[3].link}
        />

        <Card
          sname={Sdata[5].sname}
          imgSrc={Sdata[5].imgSrc}
          title={Sdata[5].title}
          link={Sdata[5].link}
        />
        </>
    )
}

export default Marvel;