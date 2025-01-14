import { colorPalette2 } from "../../../constant/constant";

const useTheme = () => {
  const colorTheme = {
    background: colorPalette2[4],
    secondaryBg: colorPalette2[3],
    main: colorPalette2[1],
    secondary: colorPalette2[0],
  };
  return {
    colorTheme,
  };
};

export default useTheme;
