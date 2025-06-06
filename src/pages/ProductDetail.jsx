import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Common/Button";
import Container from "../components/Common/Container";
import Layout from "../components/Common/Layout";
import QtyContainer from "../components/Common/QtyContainer";
import Row from "../components/Common/Row";
import client from "../apis";
import apiEndpoints from "../apis/endpoint";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const response = await client.get(apiEndpoints.product(id));
      setProduct(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Layout>
      <Container className="my-[41px]">
        <Row className="justify-between">
          <Row className="w-[47%]">
            <img
              src={product?.img}
              className="w-full object-cover h-[120vh]"
              alt={product.title}
            />
          </Row>
          <Row className="flex-col w-[47%]">
            <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px]">
              {`${product?.category.title} | ${product?.title}`}
            </h1>
            <Row className="gap-[20px] mb-[10px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Rating:
              </p>
              <p className="text-[18px] text-black">{product?.rating}</p>
            </Row>
            <Row className="gap-[20px] ">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Price:
              </p>
              <p className="text-[18px] text-black">{product?.price}</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Category:
              </p>
              <p className="text-[18px] text-black">
                {product?.category.title}
              </p>
            </Row>
            <Row className="gap-[20px]  mt-[30px]">
              <p className="text-[18px] text-black font-medium w-[17%]">
                Description:
              </p>
              <p className="text-[18px] text-black">{product?.description}</p>
            </Row>
            <div className=" w-full mt-[40px]">
              <QtyContainer data={product} />
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
