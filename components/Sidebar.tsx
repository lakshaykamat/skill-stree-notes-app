"use client";
import { Archive, Home, Tags } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="hidden sm:flex flex-col mt-6 pr-7 gap-6 w-1/3">
      <Link href={`/`}>
        <div
          className={`p-4 flex gap-3 rounded-r-full ${
            path == "/" ? "bg-primary text-primary-foreground" : " bg-secondary"
          }`}
        >
          <Home /> <span className="font-bold">Home</span>
        </div>
      </Link>
      <Link href={`/labels`}>
        <div
          className={`p-4 flex gap-3 rounded-r-full ${
            path == "/labels"
              ? "bg-primary text-primary-foreground"
              : " bg-secondary"
          }`}
        >
          <Tags /> <span className="font-bold">Labels</span>
        </div>
      </Link>
      <Link href={`/archives`}>
        <div
          className={`p-4 flex gap-3 rounded-r-full ${
            path == "/archives"
              ? "bg-primary text-primary-foreground"
              : " bg-secondary"
          }`}
        >
          <Archive /> <span className="font-bold">Archives</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
