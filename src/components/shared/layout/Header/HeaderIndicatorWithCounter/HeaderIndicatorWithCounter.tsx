import { useAppSelector } from "@hooks/reduxHooks";
import { RootState } from "@store";
import React, { useEffect, useState } from "react";

type TProps = {
  quantityHandler: (state: RootState) => number;
  styleClass: string;
  Icon: React.ReactNode;
  title: string;
};

const HeaderIndicatorWithCounter = ({
  quantityHandler,
  styleClass,
  Icon,
  title,
}: TProps) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const quantity = useAppSelector(quantityHandler);

  useEffect(() => {
    setIsAnimate(true);
    const timeOut = setTimeout(() => setIsAnimate(false), 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [quantity]);

  return (
    <div className={`d-flex align-items-center gap-2 text-light px-2 `}>
      <div
        className={`position-relative indicator-with-absolute-counter  ${styleClass}`}
      >
        {Icon}
        {quantity !== 0 && (
          <span className={`${isAnimate && " pump_animate "}`}>{quantity}</span>
        )}
      </div>
      <span>{title}</span>
    </div>
  );
};

export default HeaderIndicatorWithCounter;
