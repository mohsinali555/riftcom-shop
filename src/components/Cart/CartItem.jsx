import QtyContainer from "../Common/QtyContainer";
import Row from "../Common/Row";

const CartItem = () => {
  return (
    <Row className="border-[1px] border-gray-400 rounded items-center w-full py-[10px] px-[20px] mb-[30px]">
      <Row className="w-[20%]">
        <img
          className="w-2/3 h-[150px] object-cover rounded-[6px]"
          src="https://images.unsplash.com/photo-1593526424177-9c9c7f68d4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Cart Product"
        />
      </Row>
      <p className="w-[20%] text-[16px] text-black font-medium">Demo Product</p>
      <p className="w-[20%] text-[16px] text-black font-medium">$20</p>
      <Row className="w-[20%] justify-center">
        <QtyContainer />
      </Row>
      <p className="w-[20%] text-center text-[16px]  text-black font-medium">
        $1040
      </p>
    </Row>
  );
};

export default CartItem;
