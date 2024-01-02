"use client";
import { Heading3 } from "./Typography";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch } from "react-redux";
import { Menu, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppDispatch } from "@/app/redux/store";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { setLocalStorageItem } from "@/lib/utils";
import { NOTE_DATA } from "@/app/data";
import { GitHubLogoIcon, PersonIcon } from "@radix-ui/react-icons";
import { clearStore, sampleData } from "@/app/redux/note-slice";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [input, setInput] = useState("");
  const router = useRouter();

  const searchNote = (e: any) => {
    e.preventDefault();
    if (input) {
      router.push(`/search/${input}`);
    }
    setInput("");
  };

  return (
    <>
      <nav className="flex py-3 px-7 gap-6 justify-evenly items-center">
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <MobileSidebar />
          </SheetContent>
        </Sheet>

        <span className="hidden md:block">
          <Heading3>Skill Street</Heading3>
        </span>
        <form
          className="flex-grow md:flex-grow-0 md:w-1/3"
          onSubmit={searchNote}
        >
          <Input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Note..."
          />
        </form>
        <div className="flex gap-3 justify-center items-center">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="hidden md:flex" size="icon">
                <Settings className="w-5 h-5 stroke-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex gap-1 flex-col">
              <DropdownMenuItem
                className="bg-destructive"
                onClick={() => dispatch(clearStore())}
              >
                Clear Local Storage
              </DropdownMenuItem>
              <DropdownMenuItem
                className=""
                onClick={() => dispatch(sampleData())}
              >
                Add Example Data
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/lakshaykamat.png" />
                <AvatarFallback>LK</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex gap-1 flex-col">
              <DropdownMenuItem>
                <Link
                  className="flex gap-3 items-center"
                  href={`https://github.com/lakshaykamat/skill-stree-notes-app`}
                >
                  <GitHubLogoIcon /> Github
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="flex gap-3 items-center"
                  href={`https://lakshaykamat.netlify.app`}
                >
                  <PersonIcon /> Portfolio
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <hr />
    </>
  );
};

const MobileSidebar = () => {
  const path = usePathname();
  return (
    <SheetHeader>
      <SheetTitle className="text-xl mb-4 uppercase">Skill Street</SheetTitle>
      <div className="flex items-center gap-3">
        <span>Theme</span>
        <ThemeToggle />
      </div>
      <SheetDescription className="flex flex-col gap-6">
        <Link
          className={`${
            path == "/"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          } rounded-md p-3`}
          href={`/`}
        >
          Home
        </Link>
        <Link
          className={`${
            path == "/labels"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          } rounded-md p-3`}
          href={`/labels`}
        >
          Labels
        </Link>
        <Link
          className={`${
            path == "/archives"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          } rounded-md p-3`}
          href={`/archives`}
        >
          Archive
        </Link>
      </SheetDescription>
    </SheetHeader>
  );
};
export default Navbar;
