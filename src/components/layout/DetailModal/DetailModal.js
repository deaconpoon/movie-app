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

const DetailModal = ({
  isOpen,
  image,
  title,
  description,
  funFact,
  releaseYear,
}) => {
  return (
    <ReactModal isOpen={isOpen}>
      <Container>
        <Image src={image}></Image>
        <div>
          <h2>{title}</h2>
          <p>{releaseYear}</p>
          {/*           <p>{funFact}</p> */}
          <p>{description}</p>
        </div>
      </Container>
    </ReactModal>
  );
};
export default DetailModal;
