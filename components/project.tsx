type Props = {
  children?: React.ReactNode;
};

const project = ({ children }: Props) => {
  return (
    <div>
      <h1>Project title</h1>
      <ul>
        {children}
      </ul>
    </div>
  )
}

export default project
