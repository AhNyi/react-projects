import Question from './Question';
import './styles.css';

const questions = [
  {
    id: 1,
    title: "How many people are on social media?",
    info: "As of April 2020, a total of 3.81 billion people around the world use social media, putting the worldwide social media penetration rate at 49%."
  },
  {
    id: 2,
    title: "What is the most popular social media platform?",
    info: "Facebook continues to be the most popular social media platform."
  },
  {
    id: 3,
    title: "How long does the average person spend on social media per day?",
    info: "In 2019, the average social media user spent around 1 hour and 15 minutes per day on social media."
  }, 
  {
    id: 4,
    title: "What is the best time to post on social media?",
    info: "The best time to post on social media depends on several factors. While your choice of platform and your industry both matter, your audience activity plays the biggest role. So ideally, you should look at your post performance to get valuable data about the perfect post timing for your business."
  },
  {
    id: 5,
    title: "How can I get more followers on social media?",
    info: "Growing your social media following involves a lot of planning and strategizing as well as posting the right content and targeting the right audience."
  }
];

const App = () => {
  return (
    <>
      <h1>FAQ/Accordion</h1>
      <div className='container'>
        <h2>Frequently Asked Questions</h2>
        <div className='questions'>
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
