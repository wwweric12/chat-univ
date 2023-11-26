import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Board from "../images/board.svg";
import FillBoard from "../images/fill_board.svg";
import Home from "../images/home.svg";
import FillHome from "../images/fill_home.svg";
import Lanking from "../images/lanking.svg";
import FillLanking from "../images/fill_lanking.svg";

const Footer = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);

  return (
    <FooterContainer>
      <Link to="/board">
        <ImgContainer>
          {pathName === "/board" ? (
            <img src={FillBoard} alt="FillBoard-img" />
          ) : (
            <img src={Board} alt="Board-img" />
          )}
        </ImgContainer>
      </Link>

      <Link to="/">
        <ImgContainer>
          {pathName === "/" ? (
            <img src={FillHome} alt="FillHome-img" />
          ) : (
            <img src={Home} alt="Home-img" />
          )}
        </ImgContainer>
      </Link>

      <Link to="/lanking">
        <ImgContainer>
          {pathName === "/lanking" ? (
            <img src={FillLanking} alt="FillLanking-img" />
          ) : (
            <img src={Lanking} alt="Lanking-img" />
          )}
        </ImgContainer>
      </Link>
    </FooterContainer>
  );
};
export default Footer;
const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.GRAY};
  padding: 15px 30px 25px 30px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const ImgContainer = styled.div`
  height: 30px;
`;
