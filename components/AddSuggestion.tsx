import React, { useState } from "react";
import Input from "./Input";
import useSuggestionStore from "../hooks/useSuggestion";
import { toast } from "react-hot-toast";

const AddSuggestion = () => {
  const [suggestion, setSuggestion] = useState("");
  const suggestionStore = useSuggestionStore();

  const handleSubmit = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();

    //Making sure everyone word starts with Capital Letter so it looks better UI wise
    let modifiedString = capitalizeFirstLetter(suggestion);

    let id = suggestionStore.suggestions.length + 1;
    suggestionStore.addSuggestion(id.toString(), modifiedString);
    toast("Congrats, You added a new suggestion", {
      icon: "🎉",
    });
    setSuggestion("");
  };

  const capitalizeFirstLetter = (str: string) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className="w-full h-full relative my-[2rem]">
      <div className="flex justify-end items-center w-full lg:w-[50%] ml-auto">
        <Input
          placeholder="Suggestion Title"
          onChange={(e) => setSuggestion(e.target.value)}
          value={suggestion}
        />
        <div onClick={handleSubmit}>
          <div
            className="
      mx-[1rem]
      lg:hidden
      px-5
      py-3
      rounded-lg
      bg-[#4d7c93]
      hover:bg-opacity-90
      cursor-pointer
      transition
      "
          >
            <p
              className="
           
        text-center
        font-semibold
        text-white
        text-[15px]
        "
            >
              ADD SUGGESTION
            </p>
          </div>

          <div
            className="
      mx-[1rem]
      hidden
      lg:block
      px-5
      py-3
      rounded-lg
      bg-[#4d7c93]
      hover:bg-opacity-90
      cursor-pointer
      transition
      "
          >
            <p
              className="
           min-w-[130px]
        text-center
        font-semibold
        text-white
        text-[15px]
        "
            >
              ADD SUGGESTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSuggestion;
