import React from "react";
import { toast } from "react-hot-toast";

const Header = () => {
  const handleLinkClick = () => {
    toast("Fake Link", {
      icon: "😜",
    });
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-black text-3xl font-medium pt-9 text-left">
        Customers made these suggestions for improving Product XYZ
      </h1>
      <p className="pt-4 text-left">
        Submit, upvote, and comment on suggestions below. If you'd like to
        report a bug, visit{" "}
        <span
          className="underline decoration-blue-600 text-blue-600 cursor-pointer"
          onClick={handleLinkClick}
        >
          this page.
        </span>
      </p>
    </div>
  );
};

export default Header;
