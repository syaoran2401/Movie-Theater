import styled from "styled-components";

export const DropDownContainer = styled("div")`
    margin: 0 auto;
    width:80%
`;


export const DropDownHeader = styled("div")`
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) ;
    border-radius: 2rem  !important;
    width: 100%  !important;
    height: 3rem  !important;
    padding: 1rem  !important;
    border: none  !important;
    outline: none  !important;
    color: #3c354e  !important;
    font-size: 1rem  !important;
    font-weight: bold  !important;
    text-align: center!important;
`;

export const DropDownListContainer = styled("div")`
    position: absolute;
    width: 80%;
    z-index: 99999999;

`;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-bottom:0.1rem;
  background: #A57CB7;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) ;
  box-sizing: border-box;
  color: #3c354e ;
  font-size: 1rem ;
  font-weight: 500;
  cursor: pointer;
  &:first-child {
    padding-top: 0.8em;
  }
 
`;

export const ListItem = styled("li")`
  width:90%;
  list-style: none;
  margin:0 auto 10px;

  &:hover{
    background: rgba(255, 255, 255, 0.15) 
  }
`;
