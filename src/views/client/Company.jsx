import React from 'react';

const dataCompany = {
title:"About Teepees.cl",
description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
image:"",
bgcolor:"blue-100"
}

export function Company () {
  return (
    <div className={`max-w-[1400px] h-[500px] bg-${dataCompany.bgcolor} mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-1 gap-4`}>
      <div>
        <h3 className='text-2xl font-bold'>{dataCompany.title}</h3>
        <p className='pt-4 w-full'>
        {dataCompany.description}
        </p>
      </div>      
    </div>
  );
};
