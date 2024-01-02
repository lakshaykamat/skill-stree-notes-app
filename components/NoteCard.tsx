import { cn, truncateText } from "@/lib/utils";
import { Heading3, Paragraph } from "./Typography";
import { Card } from "./ui/card";
import { convert } from "html-to-text";

const NoteCard = ({
  text,
  title,
  color,
}: {
  title: string;
  text: string;
  color: { dark: string; light: string };
}) => {
  const textContent = convert(truncateText(text, 30));
  return (
    <Card
      className={cn(
        "transition-all cursor-pointer p-4",
        `hover:bg-[${color.dark}] dark:bg-[${color.dark}] bg-[${color.light}]`
      )}
    >
      <Heading3>{title}</Heading3>
      <Paragraph>{textContent}</Paragraph>
    </Card>
  );
};

export default NoteCard;
