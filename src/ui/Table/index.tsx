import { FC } from "react";
import { ResponsiveTag, TableControl } from "./styles";
import { TableProps } from "./types";


const Table: FC<TableProps> = (props) => {
  const { responsive, round, shadow, ...innerProps } = props;

  const table = <TableControl {...innerProps} round={round} />;

  if (responsive) {
    return <ResponsiveTag shadow={shadow} round={round}>{table}</ResponsiveTag>;
  }
  return table;
};

export default Table;
