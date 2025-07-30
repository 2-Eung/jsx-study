import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    id: 1,
    name: "ddd",
    job: "Programmer",
    imageSrc: "avatar.webp",
  },
  {
    id: 2,
    name: "sss",
    job: "우주비행사",
    imageSrc: "avatar2.webp",
  },
  {
    id: 3,
    name: "aaa",
    job: "작가",
    imageSrc: "avatar3.jpeg",
  },
];

const App = () => {
  return (
    <>
      {userData.map((value) => (
        <UserCard
          key={value.id}
          name={value.name}
          job={value.job}
          imageSrc={value.imageSrc}
        />
      ))}
    </>
  );
};

export default App;