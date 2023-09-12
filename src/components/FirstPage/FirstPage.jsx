import "../FirstPage/FirstPage.css";
const FirstPage = ({ onArrowClick }) => {
  return (
    <div className="first-page">
      <div className="picture-and-arrows">
        <img
          className="picture"
          src="/images/image-tanya.jpg"
          alt="picture of a girl"
        />
        <div className="arrows">
          <img
            className="left-arrow"
            src="/images/icon-prev.svg"
            alt="left arrow"
            onClick={onArrowClick}
          />

          <img
            className="right-arrow"
            src="/images/icon-next.svg"
            alt="right arrow"
            onClick={onArrowClick}
          />
        </div>
      </div>

      <div className="raview-and-name">
        <p className="review">
          “ I've been interested in coding for a while but never taken the jump,
          until now. I couldn't recommend this course enough. I'm now in the job
          of my dreams and so excited about the future. ”
        </p>

        <div className="name-and-proffesion">
          <p className="name">Tanya Sinclair</p>
          <p className="proffesion">UX Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
