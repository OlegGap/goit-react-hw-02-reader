import styled from '@emotion/styled';

export const ControlsSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
export const ControlsButton = styled.button`
display: inline-block;
min-width: 240px;
border: 0
padding: 8px 16px;
margin-left: 4px;
margin-right: 4px;
border-radius: 3px;
background-color: #3884ff;
transition: all 200ms ease;
font-family: inherit;
font-size: 16px;
font-weight: 500;
line-height: 24px;
font-style: normal;
text-align: center;
text-decoration: none;
color: #fff;
cursor: pointer;
&[disabled] {
  pointer-events: none;
  background-color: #bdbdbd;
}
&:hover,
&:focus {
  background-color: #1f65d6;
}
`;
