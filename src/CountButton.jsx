import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
  const handleClick = (event) => {
    event.currentTarget.blur();

    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return prev - 1;
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return prev + 1;
      }
    });
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
