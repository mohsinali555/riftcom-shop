import Layout from "../components/Common/Layout";
import Container from "../components/Common/Container";
import Row from "../components/Common/Row";
import CartItem from "../components/Cart/CartItem";

const Cart = () => {
  return (
    <Layout>
      <Container className="my-[40px]">
        <Row className="mb-[30px] justify-center">
          <h6 className="text-[24px] text-slate-700 font-semibold ">
            Cert Details
          </h6>
        </Row>
        <Row className="flex-col mb-[30px]">
          <Row className="h-[40px] bg-gray-400 w-full px-[20px] items-center">
            <h6 className="text-white text-[18px] font-semibold w-[20%]">
              Image
            </h6>
            <h6 className="text-white text-[18px] font-semibold w-[20%]">
              Title
            </h6>
            <h6 className="text-white text-[18px] font-semibold w-[20%]">
              Price
            </h6>
            <h6 className="text-white text-[18px] font-semibold w-[20%] text-center">
              Qty
            </h6>
            <h6 className="text-white text-[18px] font-semibold w-[20%] text-center">
              Total
            </h6>
          </Row>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
