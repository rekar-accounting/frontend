type PropsList = {
  title: string;
};

const ErrorModalHandler: React.FC<PropsList> = (props) => {
  return (
    <div>
      <p className="py-1 text-base text-center text-red-500">{props.title}</p>
    </div>
  );
};

export default ErrorModalHandler;
