import { useEffect } from "react";
import { partners } from "../../../../constant/constant";
import Button from "../../../shared/Button";
import IconContainer from "../../../shared/IconContainer/IconContainer";
import InfiniteScroller from "../../../shared/InfiniteScroller/InfiniteScroller";

const SectionOne = () => {
  return (
    <div className="py-8">
      <div className="flex justify-center">
        <h1 className="md:text-7xl text-xl text-center mb-8 w-[85%]">DESIGNING HOMES, DEFINING COMFORT.</h1>
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-[25%] flex justify-center flex-col gap-4">
          <p className="text-md">
            Transform your living spaces with expert guidance. Our designers bring years of experience and creativity to
            tailor stunning interiors that reflect your style and vision.
          </p>
          <div className="flex items-center font-bold">
            <img src="/assets/images/person-1.jpg" className="h-[50px] w-[50px] rounded-full object-cover max-w-full" />
            <img
              src="/assets/images/person-2.jpg"
              className="h-[50px] w-[50px] rounded-full object-cover max-w-full -ms-3"
            />
            <img
              src="/assets/images/person-3.jpg"
              className="h-[50px] w-[50px] rounded-full object-cover max-w-full -ms-3"
            />
          </div>
          <p className="ms-2 w-[50%]">Consult With Experts</p>
        </div>

        <div className="w-full md:w-[50%] px-4 py-4 ">
          <img src="/assets/images/office-room.jpg" className="h-[300px] object-cover w-full max-w-full" />
        </div>

        <div className="w-full md:w-[25%] flex items-center justify-center flex-col gap-4">
          <p className="text-md">
            Discover our bespoke furniture collections and personalized decor services designed to turn your house into
            a home.
          </p>
          <div className="w-full pe-[25%]">
            <Button
              isFullWidth
              textSize={"12px"}
              style={{
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <span>Explore Our Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col items-center mt-[96px]">
        <h2 className="text-4xl w-full">OUR PARTNERS</h2>
        <p className="w-[50%]">
          We collaborate with leading industry partners to deliver premium-quality furniture and innovative decor
          solutions. Together, we bring you craftsmanship, durability, and design excellence.
        </p>
      </div>

      <div className="flex justify-center gap-10 mt-7 ">
        <InfiniteScroller arrays={partners} />
      </div>
    </div>
  );
};

export default SectionOne;
