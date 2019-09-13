import { css } from 'styled-components';

const spacing = () => css`
   ${({ padding }) => padding && `
    padding: ${padding}
  `}
  ${({ paddingX }) => paddingX && `
    padding: 0 ${paddingX};
  `}
  ${({ paddingY }) => paddingY && `
    padding: ${paddingY} 0;
  `}
   ${({ paddingT }) => paddingT && `
    padding-top: ${paddingT};
  `}
  ${({ paddingB }) => paddingB && `
    padding-bottom: ${paddingB};
  `}
  ${({ margin }) => margin && `
    margin: ${margin}
  `}
  ${({ marginX }) => marginX && `
    margin: 0 ${marginX};
  `}
  ${({ marginY }) => marginY && `
    margin: ${marginY} 0;
  `}
  ${({ marginT }) => marginT && `
    margin-top: ${marginT};
  `}
  ${({ marginB }) => marginB && `
    margin-bottom: ${marginB};
  `}
  ${({ marginL }) => marginL && `
    margin-left: ${marginL};
  `}
  ${({ marginR }) => marginR && `
    margin-right: ${marginR};
  `}
`;

export default spacing;