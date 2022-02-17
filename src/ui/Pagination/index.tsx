import { Box, Button, Icon, Text } from "@adityawardhana/ts-react-ui";
import { FC } from "react";

interface PaginationProps {
  page: number;
  onChange: (value: number) => void;
}

const Pagination: FC<PaginationProps> = ({ page, onChange }) => {
  return (
    <Box justifyContent="center" alignItems="center">
      <Button
        variant="flat"
        color="secondary"
        shape="circle"
        size="small"
        onClick={() => {
          if (page !== 1) {
            onChange?.(page - 1);
          }
        }}
      >
        <Icon
          icon="ChevronLeftIcon"
          size="medium"
          color={page === 1 ? "black400" : "black800"}
        />
      </Button>
      <Text color="black800" type="B16" mx={8}>
        {page}
      </Text>

      <Button
        variant="flat"
        color="secondary"
        shape="circle"
        size="small"
        onClick={() => {
          onChange?.(page + 1);
        }}
      >
        <Icon icon="ChevronRightIcon" size="medium" color={"black800"} />
      </Button>
    </Box>
  );
};

export default Pagination;
