import { SelectYearContext } from "@/pages";
import { Slider } from "@mantine/core";
import { useContext } from "react";

const Sliders = () => {
  const { state: SelectYear, setState: setSelectYear } = useContext(SelectYearContext);
  return (
    <Slider
      color='pink'
      mt={100}
      mx={100}
      marks={[
        { value: 20, label: "20年後" },
        { value: 40, label: "40年後" },
        { value: 60, label: "60年後" },
        { value: 80, label: "80年後" }
      ]}
      value={SelectYear}
      onChange={setSelectYear}
      sx={{ width: "500px" }}
    />
  );
};

export default Sliders;
