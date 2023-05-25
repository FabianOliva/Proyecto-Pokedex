import "./index.css";

import aron from '../../../public/aron.png'

const Main_Card = () => {
  return (
    <div className="Main_Card_Cont">
      <span className="Main_Card-id">#304</span>
      <div className="Main_Card-img_Cont">
        <img className="Main_Card-img" src={aron} alt="" />
      </div>
      <div className="Main_Card-name">Aron</div>
    </div>
  );
};

export default Main_Card;
