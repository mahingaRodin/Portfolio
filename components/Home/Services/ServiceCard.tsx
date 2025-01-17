"use client";
import React from 'react'
import Tilt from "react-parallax-tilt";


//define props 
type Props = {
    service: {
        id: number;
        title: string;
        description: string;
        icon: string;
    };
};

const ServiceCard = ({}: Props) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-[#814ced]"></Tilt>
  )
}

export default ServiceCard