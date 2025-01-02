import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className="text-center m-0 mb-8 font-semibold">{title}</h2>
      <div className="grid gap-y-2 gap-x-1 justify-around grid-cols-[auto, minmax(auto, 400px)]">
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
