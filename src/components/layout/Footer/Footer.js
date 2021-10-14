import styled from "styled-components";
import "./Footer.scss";

const Wrapper = styled.footer``;

const Label = styled.a``;

//move to constant
const labels = [
  "Home",
  "T&C",
  "Privacy Policy",
  "Colletion Statement",
  "Help",
  "Manage Account",
];
const Footer = () => {
  return (
    <>
      <Wrapper className="footer">
        <div>
          {labels.map((label) => (
            <Label>{label}</Label>
          ))}
        </div>
        <div>
          <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
        </div>
      </Wrapper>
    </>
  );
};
export default Footer;
