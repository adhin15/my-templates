import { useEffect, useState } from "react";
import Button from "../Button";

const Carousel = ({ carouselData }: any) => {
  const [index, setIndex] = useState(0);
  const totalData = carouselData?.length;
  const totalIndex = carouselData?.length - 1;

  return (
    <div>
      <h4 className="text-xl mb-4 text-center">{carouselData[index].title}</h4>
      <div className="flex justify-center flex-wrap gap-4">
        <div className="md:w-[25%] flex flex-col justify-center items-center">
          <div className="flex flex-col gap-6">
            {carouselData[index]?.content?.map((value: any) => {
              return (
                <div>
                  <h3 className="font-bold text-xl">{value?.title}</h3>
                  <p>{value?.description} </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:w-[40%]">
          <div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  index !== 0 ? setIndex((prevIndex: number) => prevIndex - 1) : setIndex(totalIndex);
                }}
                className="min-w-[30px] h-[30px] rounded-full grid place-items-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </button>
              <div className="min-w-[300px] grid place-items-center rounded-lg max-h-[full] duration-500 w-full">
                {carouselData?.map((value: any, indexNum: number) => {
                  return (
                    <div>
                      {
                        <img
                          src={value?.image}
                          alt=""
                          className={`max-w-full max-h-[full]   ${
                            indexNum !== index ? "h-0 opacity-0" : "move-animation h-full"
                          }`}
                        />
                      }
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => {
                  index !== totalIndex ? setIndex((prevIndex: number) => prevIndex + 1) : setIndex(0);
                }}
                className="min-w-[30px] h-[30px] rounded-full grid place-items-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200"
              >
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
              </button>
            </div>
            <div className="flex justify-center gap-2">
              {[...Array(totalData)].map((_, value) => {
                return (
                  <div key={value}>
                    {
                      value === index ? <CircleFilled /> : <Circle /> // Else render Circle
                    }
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="md:w-[25%] flex flex-col justify-center">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-xl">{carouselData[index]?.subContent.title}</h3>
              <p>{carouselData[index]?.subContent.description}</p>
            </div>
            <div className="w-[60%]">
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
                <span>Explore</span>
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
      </div>
    </div>
  );
};

const Circle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    </svg>
  );
};

const CircleFilled = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-circle-fill"
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="8" />
    </svg>
  );
};

export default Carousel;
