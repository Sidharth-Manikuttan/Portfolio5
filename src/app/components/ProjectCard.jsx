import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const openGitUrl = () => {
    window.open(gitUrl, "_blank");
  };

  return (
    <div className="relative group">
      <div className="h-52 md:h-72 rounded-t-xl overflow-hidden">
        <a href={previewUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-50"
          />
        </a>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button onClick={openGitUrl} className="mr-2">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white" />
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
