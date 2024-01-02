export default function PlayBoxes() {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="answersWrapper">
      <div className="containerAnswers">
        <div className="quizAnswers">
          <div>
            3
          </div>
        </div>
        <div className="quizAnswers">
          <div>
            5
          </div>
        </div>
        <div className="quizAnswers">
          <div>
            10
          </div>
        </div>
        <div className="quizAnswers">
          <div>
            20
          </div>
        </div>
      </div>
    </div>
  );
}
