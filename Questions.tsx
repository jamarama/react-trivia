

type QuestionProps = {
  category: string;
  question: string;
  answer: string;
  options: string[];
  onAnswer: (isCorrect: boolean) => void;
  handleBack: () => void;
  handleForward: () => void;
};

function Questions({
  question,
  options,
  answer,
  onAnswer,
  handleBack,
  handleForward,
}: QuestionProps) {
  return (
    <div className="card">
      <h2>{question}</h2>
      <div className="options-list">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option === answer)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>

      <div className="nav-options">
        <button onClick={handleBack}> Back</button>
        <button onClick={handleForward}>Forward </button>
      </div>
    </div>
  );
}

export default Questions;
