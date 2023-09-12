import "../SecondPage/SecondPage.css";
const SecondPage = ({ onArrowClick }) => {
  return (
    <div className="second-page">
      <div className="picture-and-arrows-second">
        <img
          className="picture-second"
          src="/images/image-john.jpg"
          alt="picture of a boy"
        />
        <div className="arrows-second">
          <img
            className="left-arrow-second"
            src="/images/icon-prev.svg"
            alt="left arrow"
            onClick={onArrowClick}
          />

          <img
            className="right-arrow-second"
            src="/images/icon-next.svg"
            alt="right arrow"
            onClick={onArrowClick}
          />
        </div>
      </div>

      <div className="raview-and-name-second">
        <p className="review-second">
          “ If you want to lay the best foundation possible I'd recommend taking
          this course. The depth the instructors go into is incredible. I now
          feel so confident about starting up as a professional developer. ”
        </p>

        <div className="name-and-proffesion-second">
          <p className="name-second">John Tarkpor</p>
          <p className="proffesion-second">Junior Front-end Developer</p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
