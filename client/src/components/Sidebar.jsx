import React from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import {
  Hash,
  House,
  Icon,
  SquarePen,
  Image,
  Eraser,
  Scissors,
  FileText,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-gray-100 border-r border-gray-300 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        <img
          src={user.imageUrl}
          alt="User Avatar"
          className="w-13 rounded-full mx-auto"
        />
        <h1 className="text-center mt-1 mb-6">{user.fullName}</h1>
        <div>
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-[#3c81e6] to-[#9234ea] text-white"
                    : ""
                }`
              }
            >
             {
                ({isActive}) => (
                   <>
                     <Icon className={`w-5 h-5 mr-2 ${isActive ? "text-white" : "text-gray-600"}`} />
                     <span>{label}</span>
                   </>
                )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
