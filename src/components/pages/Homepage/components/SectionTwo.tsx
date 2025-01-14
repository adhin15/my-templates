import Button from "../../../shared/Button";

const SectionTwo = () => {
  return (
    <div className="flex flex-wrap py-8 pb-10 justify-between">
      <div className="md:w-[40%] w-full mb-4">
        <h2 className="text-3xl">About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

        <div className="flex gap-5 mt-8">
          <div className="w-[33%]">
            <h2 className="md:text-5xl text-2xl">152+ </h2>
            <p className="text-sm">Beautiful Spaces Designed</p>
          </div>
          <div className="w-[33%]">
            <h2 className="md:text-5xl text-2xl">500+</h2>
            <p className="text-sm">Exclusive Furniture Designs</p>
          </div>
          <div className="w-[33%]">
            <h2 className="md:text-5xl text-2xl">9K+</h2>
            <p className="text-sm">Satisfied Clients and Successful Projects</p>
          </div>
        </div>

        <div className="mt-5">
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

      <div className="md:w-[45%]">
        <img src="/assets/images/two-chairs.jpg" className="h-[350px] w-full object-cover max-w-full" />
      </div>
    </div>
  );
};

export default SectionTwo;
