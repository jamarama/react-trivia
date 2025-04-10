type QuestionProps = {
  category: string;
  question: string;
  answer: string;
  options: string[];
  onAnswer: (isCorrect: boolean) => void;
};

function Questions({ question, options, answer, onAnswer }: QuestionProps) {
  return (
    <div className="card">
      <div className="bottom">
        <h2>{question}</h2>
        {options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option === answer)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Questions;

