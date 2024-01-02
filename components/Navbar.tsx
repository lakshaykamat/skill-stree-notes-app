"use client";
import { Heading3 } from "./Typography";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
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
        <Input
          className="flex-grow md:flex-grow-0 md:w-1/3"
          placeholder="Search Note..."
        />
        <div className="flex gap-3 justify-center items-center">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <Button variant="outline" className="hidden md:flex" size="icon">
            <Settings className="w-5 h-5 stroke-1" />
          </Button>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
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
