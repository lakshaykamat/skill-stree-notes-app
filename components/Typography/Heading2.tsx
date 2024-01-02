type Props = {
  className?: String;
  children: React.ReactNode;
};
export function Heading2(props: Props) {
  return (
    <h2
      className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${props.className}`}
    >
      {props.children}
    </h2>
  );
}
