import Container from "./Common/Container";
import Row from "./Common/Row";

const Footer = () => {
  return (
    <Container className="bg-black h-[52px] py-[14px]">
      <Row className="text-white justify-between h-full items-center">
        <p>© 2025 RiftCom Inc.</p>
        <img src="/images/cards.png" alt="cards" className="w-[283px]" />
        <p>Scroll to Top</p>
      </Row>
    </Container>
  );
};

export default Footer;
