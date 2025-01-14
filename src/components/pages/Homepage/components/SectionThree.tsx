import { useRef, useState } from "react";
import Button from "../../../shared/Button";
import Carousel from "../../../shared/Carousel/Carousel";
import { carouselData } from "../../../../constant/constant";

const SectionThree = () => {
  return (
    <div className="py-12">
      <div className="mb-10">
        <img src="/assets/images/black-sofa.jpg" className="max-h-[925px]" />
      </div>

      <div>
        <div className="text-center mt-8 flex-wrap">
          <h2 className="text-3xl">Our Products</h2>
        </div>
      </div>
      <Carousel carouselData={carouselData} />

      <div className="mt-10"></div>
    </div>
  );
};

export default SectionThree;
