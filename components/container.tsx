type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-4">{children}</div>;
};

export default Container;

