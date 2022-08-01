/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  // Sassをそのまま使える
  const containerstyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  // ↓inlineStyleと同じ
  const titleStyle = css({
    margin: 0,
    color: "#3d84e8"
  });

  return (
    <div css={containerstyle}>
      <p css={titleStyle}> - Emotion - </p>
      <SButton> FIGHT!!</SButton>
    </div>
  );
};

// styledComponensと似たやり方
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
