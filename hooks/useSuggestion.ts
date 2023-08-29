import { create } from "zustand";

//I set ID as string because you can go infinite whereas normal numbers have a cap on how big you can go.
interface Suggestion {
  id: string;
  title: string;
  votes: number;
}

interface SuggestionStore {
  suggestions: Suggestion[];
  addSuggestion: (id: string, title: string) => void;
  incrementVote: (id: string) => React.MouseEventHandler<SVGElement> | void;
  decrementVote: (id: string) => React.MouseEventHandler<SVGElement> | void;
}

let initialSuggestions: Suggestion[] = [
  { id: "1", title: "Multi-language Support", votes: 56 },
  { id: "2", title: "Dark Mode", votes: 43 },
  { id: "3", title: "Auto Save", votes: 41 },
  { id: "4", title: "Custom Notification Options", votes: 5 },
];

const useSuggestionStore = create<SuggestionStore>((set) => ({
  suggestions: initialSuggestions,
  addSuggestion: (id: string, title: string) =>
    set((state) => ({
      suggestions: [...state.suggestions, { id, title, votes: 0 }],
    })),

  incrementVote: (id) =>
    set((state) => ({
      suggestions: state.suggestions.map((s) =>
        s.id === id ? { ...s, votes: s.votes + 1 } : s
      ),
    })),
  decrementVote: (id) =>
    set((state) => ({
      suggestions: state.suggestions.map((s) =>
        s.id === id ? { ...s, votes: s.votes - 1 } : s
      ),
    })),
}));

export default useSuggestionStore;
