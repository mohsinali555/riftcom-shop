import Row from "./Row";
import Button from "./Button";
import { useState } from "react";

const QtyContainer = ({ data }) => {
  const [qty, setQty] = useState(0);

  const handleClickDec = () => {
    setQty((prev) => {
      if (prev > 0) {
        return --prev;
      }
      return prev;
    });
  };
  const handleClickInc = () => {
    setQty((prev) => ++prev);
  };

  return (
    <Row className="items-center">
      <Button
        onClick={handleClickDec}
        title="-"
        className="w-[52px] h-[52px]"
      />
      <p className="w-[70px] text-center text-[16px] font-semibold">{qty}</p>
      <Button
        onClick={handleClickInc}
        title="+"
        className="w-[52px] h-[52px]"
      />
    </Row>
  );
};

export default QtyContainer;
