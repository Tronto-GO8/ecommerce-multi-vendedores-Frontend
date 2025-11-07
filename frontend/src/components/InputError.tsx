type InputErrorProps = {
  message?: string;
};

export default function InputError({ message }: InputErrorProps) {
  if (!message) return null;
  return <p className="text-xs text-red-500 mt-1">{message}</p>;
}
