import { Images } from "../../images";
import { useNotFoundStyles } from "./NotFound.style";

const NotFound = () => {
  const classes = useNotFoundStyles();
  const { container } = classes;
  return (
    <div className={container}>
      <img src={Images.notFound} alt={"Not Found"} />
    </div>
  );
};

export default NotFound;
