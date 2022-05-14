type propsList = {
  title: string;
};

const ErrorModalHandler: React.FC<propsList> = (props) => {
  return (
    <div>
      <p className="py-1 text-base text-center text-red-500">{props.title}</p>
    </div>
  );
};

export default ErrorModalHandler;
