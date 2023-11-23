import styled from "styled-components";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import searchSrc from "../images/search.svg";
import closeSrc from "../images/search_close.svg";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const querySearchTerm = queryParams.get("q");

  useEffect(() => {
    if (querySearchTerm) {
      setSearchTerm(querySearchTerm);
      setSearchSubmitted(true);
    } else {
      setSearchTerm("");
      setSearchSubmitted(false);
    }
  }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();
    queryParams.set("q", searchTerm);
    const searchPath = `${location.pathname}?${queryParams.toString()}`;
    navigate(searchPath);
    setSearchSubmitted(true);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchSubmitted(false);
    const searchPath = location.pathname;
    navigate(searchPath);
  };

  return (
    <Layout onSubmit={handleSearch}>
      {searchSubmitted && (
        <WordLayout>
          <WordBox>
            <ClearSearchBtn onClick={handleClearSearch}>
              <img alt="close" src={closeSrc} />
            </ClearSearchBtn>
            <span>{searchTerm}</span>
          </WordBox>
          <SearchBtn type="submit">
            <img alt="search" src={searchSrc} />
          </SearchBtn>
        </WordLayout>
      )}
      {!searchSubmitted && (
        <>
          <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <SearchBtn type="submit">
            <img alt="search" src={searchSrc} />
          </SearchBtn>
        </>
      )}
    </Layout>
  );
};

export default Search;

const Layout = styled.form`
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  background: ${({ theme }) => theme.colors.WHITE};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const SearchInput = styled.input`
  display: flex;
  height: 25px;
  padding: 5px;
  align-items: center;
  gap: 5px;
  flex: 1 0 0;
  border: none;
  outline: none;
`;

const SearchBtn = styled.button`
  border: none;
  background-color: none;
  width: 25px;
  height: 25px;
`;

const WordBox = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  gap: 5px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.PURPLE100};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 529px) {
    font-size: 14px;
  }
`;

const ClearSearchBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const WordLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex: 1 0 0;
`;
