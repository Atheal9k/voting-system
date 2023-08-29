import type { NextPage } from "next";
import Suggestion from "../components/Suggestion";
import Header from "../components/Header";
import AddSuggestion from "../components/AddSuggestion";
import useSuggestionStore from "../hooks/useSuggestion";

const Home: NextPage = () => {
  const suggestionStore = useSuggestionStore();

  return (
    <>
      <Header />
      <AddSuggestion />
      <div>
        {suggestionStore.suggestions
          .slice()
          .sort((a, b) => b.votes - a.votes)
          .map((suggestion) => (
            <Suggestion
              id={suggestion.id}
              title={suggestion.title}
              votes={suggestion.votes}
              key={suggestion.id}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
