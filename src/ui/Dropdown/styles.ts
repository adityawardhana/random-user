import styled from "styled-components";

export const DropdownMenu = styled.ul`
  box-shadow: ${(props) => props.theme.shadow[1]};
  box-sizing: border-box;
  margin-top: -1px;
  border-radius: ${(props) => props.theme.border.radius};
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
  background: ${(props) => props.theme.color.white};
  padding-left: 0;

  li {
    border-bottom: 1px solid ${(props) => props.theme.color.black100};
    padding: 12px 16px;
    cursor: pointer;

    &:last-child {
      border-bottom: 0px;
    }
  }
`;