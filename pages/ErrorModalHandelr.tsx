type propsList = {
  title: string;
};

const ErrorModalHandelr: React.FC<propsList> = (props) => {
  return (
    <div>
      <p className="py-4 text-sm text-center text-red-500">{props.title}</p>
    </div>
  );
};

export default ErrorModalHandelr;
