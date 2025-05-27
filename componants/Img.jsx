import my_image from "@/public/img/image.png";
import Image from "next/image";

function Img() {
  return <Image src={my_image} width={500} height={300} alt="image" />;
}

export default Img;
