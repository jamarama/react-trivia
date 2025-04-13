import "./App.css";
import Questions from "./Questions";
import { useState } from "react";

const categories = [
  "Planets",
  "Signs",
  "Personality",
  "Houses",
  "Aspects",
  "Transits",
  "Modalities",
];

const triviaData = [
  {
    question: "What are the 12 zodiac signs based on?",
    options: [
      "The month you were born.",
      "The location you were born.",
      "The position of the Sun at birth.",
      "Your personality.",
    ],
    answer: "The position of the Sun at birth.",
    category: "Signs",
  },
  {
    question: "Which zodiac sign is symbolized by the twins?",
    options: ["Pisces", "Gemini", "Libra", "Leo"],
    answer: "Gemini",
    category: "Signs",
  },
  {
    question: "What is the ruling planet of Aries?",
    options: ["Venus", "Mars", "Saturn", "Mercury"],
    answer: "Mars",
    category: "Planets",
  },
  {
    question:
      "Which zodiac sign is known for being the most emotional and intuitive?",
    options: ["Pisces", "Cancer", "Leo", "Capricorn"],
    answer: "Cancer",
    category: "Personality",
  },
  {
    question: "What element is associated with Sagittarius?",
    options: ["Air", "Fire", "Earth", "Water"],
    answer: "Fire",
    category: "Signs",
  },
  {
    question: "How many houses are in an astrological birth chart?",
    options: ["9", "10", "4", "12"],
    answer: "12",
    category: "Planets",
  },
  {
    question: "Which house represents career and public reputation?",
    options: ["1st House", "10th House", "7th House", "4th House"],
    answer: "10th House",
    category: "Planets",
  },
  {
    question: "What does the 7th House rule over in astrology?",
    options: ["Finance", "Hobbies", "Relationships", "Education"],
    answer: "Relationships",
    category: "Planets",
  },
  {
    question: "In astrology, what does a person’s Moon sign represent?",
    options: [
      "Their appearance",
      "Their emotions and inner self.",
      "Their surroundings",
      "Their profession",
    ],
    answer: "Their emotions and inner self.",
    category: "Personality",
  },
  {
    question:
      "Which part of a birth chart represents a person’s outward personality and first impressions?",
    options: [
      "The Moon",
      "The Midheaven",
      "The Sun",
      "The Ascendant (Rising Sign)",
    ],
    answer: "The Ascendant (Rising Sign)",
    category: "Personality",
  },
  {
    question: "Which planet is associated with love and beauty?",
    options: ["Mars", "Jupiter", "Venus", "Neptune"],
    answer: "Venus",
    category: "Planets",
  },
  {
    question: "What does Mercury retrograde often affect?",
    options: ["Friendships", "Weather", "Karma", "Communication"],
    answer: "Communication",
    category: "Planets",
  },
  {
    question: "Which planet is considered the 'Great Benefic' in astrology?",
    options: ["Saturn", "Pluto", "Jupiter", "Venus"],
    answer: "Jupiter",
    category: "Planets",
  },
  {
    question:
      "Which two planets are known as the 'malefics' in traditional astrology?",
    options: [
      "Mars and Saturn",
      "Venus and Mercury",
      "Sun and Moon",
      "Pluto and Uranus",
    ],
    answer: "Mars and Saturn",
    category: "Planets",
  },
  {
    question: "What does Saturn symbolize in astrology?",
    options: ["Adventure", "Business", "Karma", "Relationships"],
    answer: "Karma",
    category: "Planets",
  },
  {
    question: "What element represents material things?",
    options: ["Fire", "Earth", "Air", "Water"],
    answer: "Earth",
    category: "Elements",
  },
  {
    question: "Which zodiac sign belongs to the Earth element?",
    options: ["Gemini", "Virgo", "Leo", "Cancer"],
    answer: "Virgo",
    category: "Signs",
  },
  {
    question: "What type of signs deal with change easily?",
    options: ["Fixed", "Second", "Cardinal", "Mutable"],
    answer: "Mutable",
    category: "Signs",
  },
  {
    question: "Which signs are considered Fixed signs?",
    options: [
      "Aries, Leo, Sagittarius, Pisces",
      "Gemini, Libra, Aquarius, Scorpio",
      "Taurus, Leo, Scorpio, Aquarius",
      "Virgo, Capricorn, Taurus, Scorpio",
    ],
    answer: "Taurus, Leo, Scorpio, Aquarius",
    category: "Signs",
  },
  {
    question: "Which element is most associated with intuition and emotions?",
    options: ["Water", "Fire", "Air", "Water"],
    answer: "Water",
    category: "Elements",
  },
  {
    question:
      "What is the only zodiac sign represented by an inanimate object?",
    options: ["Taurus", "Pisces", "Libra", "Sagitarius"],
    answer: "Libra",
    category: "Signs",
  },
  {
    question:
      "Which sign is known for being the most analytical and detail-oriented?",
    options: ["Pisces", "Leo", "Virgo", "Scorpio"],
    answer: "Virgo",
    category: "Personality",
  },
  {
    question: "Which sign is considered the 'old soul' of the zodiac?",
    options: ["Cancer", "Capricorn", "Pisces", "Aquarius"],
    answer: "Pisces",
    category: "Personality",
  },
  {
    question: "Which sign is often said to have the best leadership skills?",
    options: ["Capricorn", "Leo", "Aquarius", "Scorpio"],
    answer: "Capricorn",
    category: "Personality",
  },
  {
    question: "What zodiac sign marks the beginning of the astrological year?",
    options: ["Aries", "Capricorn", "Leo", "Aquarius"],
    answer: "Aries",
    category: "Signs",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = triviaData[currentIndex];

  const handleCategory = (category: string): void => {
    console.log("Click Category", category);
  };

  const handleScore = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentIndex < triviaData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsFinished(true);
      }
    }, 200);
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleForward = () => {
    if (currentIndex < triviaData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <>
      <div className="main-nav">
        <h1 className="text-center">Astrological Trivia</h1>
        <p className="text-center">How well do you know the signs!</p>

        <div className="category-nav">
          {categories.map((category: string, index: number) => (
            <button key={index} onClick={() => handleCategory(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="content">
        <div className="cards-container">
          {!isFinished ? (
            <Questions
              question={currentQuestion.question}
              answer={currentQuestion.answer}
              options={currentQuestion.options}
              category={currentQuestion.category}
              onAnswer={handleScore}
              handleBack={handleBack}
              handleForward={handleForward}
            />
          ) : (
            <div className="card">
              <h2>Game Over!</h2>
              <p>
                Your Score: {score} / {triviaData.length}
              </p>
              <button onClick={handleRestart}>Play Again</button>
            </div>
          )}
        </div>

        <div className="footer">
          <div className="footer-content">
            <p className="score">Score: {score}</p>
            {!isFinished && (
              <button onClick={handleRestart} className="restart-button">
                Restart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;