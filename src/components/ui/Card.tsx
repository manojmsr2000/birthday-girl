import "./Card.css";

const BirthdayGift = ({ setIsPresentOpen }: any) => {
  const handleInputClick = () => {
    setTimeout(() => {
      setIsPresentOpen(true);
    }, 500);
  };
  return (
    <div className="birthday-gift">
      <div className="gift">
        <input id="click" type="checkbox" onClick={handleInputClick} />
        <label className="click" htmlFor="click"></label>
        <div className="sparkles">
          <div className="spark1"></div>
          <div className="spark2"></div>
          <div className="spark3"></div>
          <div className="spark4"></div>
          <div className="spark5"></div>
          <div className="spark6"></div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayGift;
