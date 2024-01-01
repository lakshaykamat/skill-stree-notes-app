import { Home, HomeIcon } from "lucide-react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="hidden sm:flex flex-col mt-6 pr-7 gap-6 w-1/3">
      <div className="bg-secondary p-4 flex gap-3 rounded-r-full">
        <Home /> Home
      </div>
      <div className="bg-secondary p-4 rounded-r-full"> Labels</div>
      <div className="bg-secondary p-4 rounded-r-full">Archive</div>
      <div className="bg-secondary p-4 rounded-r-full">Settings</div>
    </div>
  );
};

export default Sidebar;
