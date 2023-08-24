import "./index.css";

interface IProps {
  logo: string;
  delay: string;
}

function index({ logo, delay = "0ms" }: IProps) {
  return (
    <img
      src={logo}
      alt=""
      className="logo__img"
      style={{ animationDelay: delay }}
    />
  );
}

export default index;
