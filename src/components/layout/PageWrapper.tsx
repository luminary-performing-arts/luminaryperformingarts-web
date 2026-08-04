type Props = {
  children: React.ReactNode;
};

export default function PageWrapper({
  children,
}: Props) {
  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
      "
    >
      {children}
    </div>
  );
}