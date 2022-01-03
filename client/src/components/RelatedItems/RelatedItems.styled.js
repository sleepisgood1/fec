import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  overflow:hidden;
  box-shadow: 0 2px 20 px $clr-gray300;
  border-radius:$radius;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  cursor:pointer;
  transition:transform 200ms ease-in;
  width: 300px;
  border-radius:2rem;

  img {
    height:20rem;
    width:100%;
    object-fit:cover;
  };

  b {
    color: red;
  };
`;

export const Container = styled.div`
  display:flex;
  overflow:hidden;
`;

export const Stars = styled.div`
  display:flex;
  overflow:hidden;
`;

export const Details = styled.div`
  display:flex;
  overflow:hidden;
`;

export const Popup = styled.div`
  position: fixed;
  top:50%;
  left: 25%;
  width: 50%;
  height: 40vh;
  background-color: rgba(0,0,0,0.2);
  color: rgba(0, 0, 0, 0.9);
  background: rgba(255, 255, 255, 0.9);
  border-color: blue;
  border: 2px solid;

  display:flex;
  justify-content: center;
  align-items: center;

  table {
    justify-content: center;
    align-items: center;
    height: 100%;
  };
  td {
    text-align: center;
    padding: 5px;
  };
`;

export const checks = styled.div`
  display:flex;
  overflow:hidden;
  height: 20 vh;
`;

export const ComparisonButton = styled.button`
  flex: 0 0 auto;
  height: 40px;
  padding: 0 2rem;
  border: 0;
  border-radius: 20px;
  color: rgba(0, 0, 0, 0.85);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
  transition: background 0.255;
`
// export const Styled
