import "./index.css";

interface IProps {
  logo: string;
}

function index({ logo }: IProps) {
  return <img src={logo} alt="" className="logo__img" />;
}

export default index;
