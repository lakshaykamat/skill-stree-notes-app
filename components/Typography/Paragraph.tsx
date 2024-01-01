type Props = {
  className?: String;
  children: React.ReactNode;
};
export function Paragraph(props: Props) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${props.className}`}>
      {props.children}
    </p>
  );
}
