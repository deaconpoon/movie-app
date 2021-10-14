import ReactModal from "react-modal";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50%;
  background-color: lightblue;

  display: inline-flex;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: contain;
`;

const DetailPage = ({
  isOpen,
  image,
  title,
  description,
  funFact,
  releaseYear,
}) => {
  return (
    <ReactModal aria-label="Movie's detail modal" isOpen={isOpen}>
      <Container>
        <Image aria-label="Movie's detail image" src={image}></Image>
        <div>
          <h2 aria-label="Movie's detail title">{title}</h2>
          <p aria-label="Movie's detail release year">{releaseYear}</p>
          <p aria-label="Movie's detail fun fact">{funFact}</p>
          <p aria-label="Movie's detail description">{description}</p>
        </div>
      </Container>
    </ReactModal>
  );
};
export default DetailPage;
