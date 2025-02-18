import { EditIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function EditButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={cn(
        "bg-white rounded-full p-2 filter-drop-shadow hover:bg-gray-100",
        className
      )}
      style={{ filter: "drop-shadow(0px 4px 8px #0000001A)" }}
      onClick={onClick}
    >
      <EditIcon />
    </button>
  );
}
