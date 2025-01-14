import Button from "../../../shared/Button";

const SectionFour = () => {
  return (
    <div className="py-8">
      <div className="flex flex-wrap md:h-[400px]">
        <div className="md:w-[25%] p-2 h-full ">
          <img src="/assets/images/room-decor-potted-plants.jpg" className="rounded-lg h-full w-full object-cover" />
        </div>
        <div className="md:w-[50%] p-2 relative h-full">
          <div className="absolute top-0 left-0 z-2 opacity-60 rounded-lg z-10 h-full w-full p-2">
            <img src="/assets/images/black_image.webp" className="h-full object-cover rounded-lg w-full" />
          </div>
          <div className="absolute top-0 left-0 rounded-lg h-full w-full p-2">
            <img src="/assets/images/basket-cactus.jpg" className="rounded-lg h-full object-cover" />
          </div>

          <div className="z-20 relative flex flex-wrap flex-col text-center items-center justify-center h-full p-10">
            <h2 className="text-2xl text-white">Stories of Success</h2>
            <span className="text-sm text-white">
              Discover how we’ve transformed living spaces into beautiful, functional homes. Our success stories
              showcase the passion and craftsmanship behind every project we complete.
            </span>
            <div className="mt-4">
              <Button
                textSize={"12px"}
                style={{
                  borderRadius: "999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <span>Learn More</span>
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
        <div className="md:w-[25%] p-2 flex flex-col h-full relative">
          <div className="h-[50%] pb-2">
            <img src="/assets/images/wooden-chair-table.jpg" className="rounded-lg object-cover h-full w-full" />
          </div>
          <div className="h-[50%] pt-2">
            <img src="/assets/images/front-view-interior.jpg" className="rounded-lg object-cover h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
