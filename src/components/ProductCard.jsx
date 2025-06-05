import React from "react";
import Row from "./Common/Row";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductCard = () => {
  return (
    <Link to="/product-detail" className="w-full shadow pb-[5px]">
      <img
        src="https://images.unsplash.com/photo-1593526424177-9c9c7f68d4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="productCard"
        className="w-full object-cover h-[400px]"
      />
      <Row className="px-[10px]">
        <h6 className="text-black text-[16px] font-semibold mt-[18px]">
          Demo Title
        </h6>
      </Row>
      <Row className="justify-between mt-[16px] px-[10px] mb-[10px]">
        <p className="text-[16px] text-[#00000080]">Clothing</p>
        <p className="text-[16px] text-[#00000080] font-semibold">$20</p>
      </Row>
    </Link>
  );
};

export default ProductCard;
