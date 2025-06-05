import Button from "../components/Common/Button";
import Container from "../components/Common/Container";
import Layout from "../components/Common/Layout";
import QtyContainer from "../components/Common/QtyContainer";
import Row from "../components/Common/Row";

const ProductDetails = () => {
  return (
    <Layout>
      <Container className="my-[41px]">
        <Row className="justify-between">
          <Row className="w-[47%]">
            <img
              className="w-full object-cover h-[120vh]"
              src="https://images.unsplash.com/photo-1593526424177-9c9c7f68d4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Product"
            />
          </Row>
          <Row className="flex-col w-[47%]">
            <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px]">
              Clothing | Demo Product
            </h1>
            <Row className="gap-[20px] mb-[10px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Rating:
              </p>
              <p className="text-[18px] text-black">2/5</p>
            </Row>
            <Row className="gap-[20px] ">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Price:
              </p>
              <p className="text-[18px] text-black">$20</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Category:
              </p>
              <p className="text-[18px] text-black">Clothing</p>
            </Row>
            <Row className="gap-[20px]  mt-[30px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Description:
              </p>
              <p className="text-[18px] text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda sapiente atque voluptatum deleniti, esse voluptas
                voluptatibus consectetur delectus nisi minus nobis in at
                obcaecati doloribus hic vel, eum modi optio.
              </p>
            </Row>
            <div className=" w-full mt-[40px]">
              <QtyContainer />
            </div>
            <Button
              title="Add to Cart"
              className="h-[52px] w-[174px] mt-[20px]"
            />
          </Row>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductDetails;
