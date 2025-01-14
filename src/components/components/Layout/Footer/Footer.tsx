import { FooterItems } from "../../../../constant/constant";
import Button from "../../../shared/Button";
import useTheme from "../../../shared/Theme/Theme";

const Footer = () => {
  const { colorTheme } = useTheme();
  return (
    <div className={`bg-[${colorTheme.secondaryBg}] px-12 py-4 h-[500px]`}>
      <div className="w-[40%] h-[70%] flex flex-col justify-center">
        <h2 className="text-2xl font-bold">Discover Your Perfect Space</h2>
        <span className="text-lg">
          Find the design that matches your vision. Explore our portfolio of inspired interiors today!
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
            <span>Get Started</span>
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
      <div className="flex max-w-[80%] justify-between w-full">
        {FooterItems.map((value: any, index: number) => {
          return (
            <div className="flex flex-col pe-10">
              <h3 className="text-lg font-bold">{value.header}</h3>
              <div>
                {value.items.map((items: any) => {
                  return (
                    <a className="block w-full" href={items.url}>
                      {items.label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
