import { Box, Button, Icon } from "@adityawardhana/ts-react-ui";
import { FC, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { DropdownMenu } from "./styles";

interface DropdownProps {
  label: string;
  content: any[];
  onChange: (val: any) => void;
}

const Dropdown: FC<DropdownProps> = ({ label, content, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {
    setOpen(false)
  });
  return (
    <Box position="relative" ref={dropdownRef}>
      <Button
        variant="invert"
        color="secondary"
        onClick={() => setOpen(!open)}
        fullWidth
        style={{ justifyContent: "space-between" }}
      >
        {label}
        <Icon
          icon={open ? "ChevronUpIcon" : "ChevronDownIcon"}
          color="secondary"
        />
      </Button>
      {open && (
        <DropdownMenu>
          {content?.map((item: any, index: number) => {
            return (
              <li
                key={index}
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
              >
                {item.label}
              </li>
            );
          })}
        </DropdownMenu>
      )}
    </Box>
  );
};

export default Dropdown;
