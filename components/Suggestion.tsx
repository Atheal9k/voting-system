import React from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import useSuggestionStore from "../hooks/useSuggestion";

interface SuggestionProps {
  id: string;
  title: String;
  votes: Number;
}

const Suggestion: React.FC<SuggestionProps> = ({ id, title, votes }) => {
  const suggestionStore = useSuggestionStore();

  const handleVote: (
    direction: string
  ) => React.MouseEventHandler<SVGElement> = (direction: string) => (e) => {
    e.preventDefault();
    if (direction === "up") {
      suggestionStore.incrementVote(id);
    }
    if (direction === "down") {
      suggestionStore.decrementVote(id);
    }
  };
  return (
    <div className="w-full border-[1px] border-neutral-200 flex h-[160px] bg-white">
      <div
        id="voteCount"
        className="flex basis-1/6 justify-center items-center text-center"
      >
        <div className="flex w-full justify-center items-center h-full">
          <div className="flex flex-col text-black text-4xl font-bold mx-[1rem] p-[5px]">
            {votes.toString()}
            <p className="text-base font-normal">Votes</p>
          </div>

          <div className="mx-[0.5rem] p-[5px]">
            <FiChevronUp
              size={28}
              color="gray"
              className="cursor-pointer hover:stroke-[#4d7c93] transition"
              onClick={handleVote("up")}
            />
            <FiChevronDown
              size={28}
              color="gray"
              className="cursor-pointer hover:stroke-[#4d7c93] transition"
              onClick={handleVote("down")}
            />
          </div>

          <div className="border-r-[2px] border-neutral-200 h-[60%] mr-[1rem]"></div>
        </div>
      </div>

      <div
        id="title"
        className="flex basis-1/2 justify-start items-center text-left text-black text-3xl font-medium"
      >
        {title}
      </div>
    </div>
  );
};

export default Suggestion;
