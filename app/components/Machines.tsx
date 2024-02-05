import CardsSlider from "./CardsSlider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Machines() {
  return (
    <div
      style={{
        minWidth: "800px",
        minHeight: "100px",
        maxWidth: "97%",
        maxHeight: "1000px",
      }}
    >
      <CardsSlider />
    </div>
  );
}
