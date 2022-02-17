import { Box, Icon, Text } from "@adityawardhana/ts-react-ui";
import { FC } from "react";

interface SorterProps {
  name: string;
  value: string;
  order: string;
  selectedValue?: string;
  onChange: (value: string, order: string) => void;
}
const Sorter: FC<SorterProps> = ({
  name,
  value,
  order,
  selectedValue,
  onChange,
}) => {
  const handleClickSort = () => {
    value !== selectedValue && onChange(value, "ascend");
    value === selectedValue &&
      onChange(value, order === "ascend" ? "descend" : "ascend");
  };

  return (
    <Box
      as="span"
      onClick={handleClickSort}
      alignItems="center"
      justifyContent="space-between"
      cursor="pointer"
    >
      <Text bold as="span">
        {name}
      </Text>
      {selectedValue === value && (
        <Icon icon={order === "ascend" ? "ChevronUpIcon" : "ChevronDownIcon"} />
      )}
    </Box>
  );
};

export default Sorter;
