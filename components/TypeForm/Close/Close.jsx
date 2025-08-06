import { useAppContext } from "@/context/state";
import { CloseCom } from "./styled";

const Close = () => {
  const { formState } = useAppContext();
  const { setActiveForm, setDone } = formState;

  return (
    <CloseCom
      whileHover={{
        cursor: "pointer",
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.9,
        opacity: 0.5,
      }}
      onClick={() => {
        setActiveForm(false);
        setDone(false);
      }}
      type="button"
    >
      <svg
        width="31"
        height="29"
        viewBox="0 0 31 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.5001 1.00065L1.50081 29L0.793701 28.2928L28.793 0.293545L29.5001 1.00065Z"
          fill="var(--color-black)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.4992 28.9993L1.49992 0.999954L2.20702 0.292847L30.2063 28.2921L29.4992 28.9993Z"
          fill="var(--color-black)"
        />
      </svg>
    </CloseCom>
  );
};

export default Close;
