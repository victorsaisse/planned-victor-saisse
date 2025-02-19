import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Share2 } from "lucide-react";

export default function ShareButton({
  className,
  onClick,
  tooltipText,
}: {
  className?: string;
  onClick?: () => void;
  tooltipText?: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={cn(
              "bg-white rounded-full p-2 filter-drop-shadow hover:bg-gray-100",
              className
            )}
            style={{ filter: "drop-shadow(0px 4px 8px #0000001A)" }}
            onClick={onClick}
          >
            <Share2 size={16} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText ? tooltipText : "Share"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
