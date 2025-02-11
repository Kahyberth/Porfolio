import { calculateDuration } from "../utils/calculateDuration";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export default function TimelineItem({ year, title, description }: TimelineItemProps) {
  const duration = calculateDuration(year);

  return (
    <div className="mb-8 flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-px h-full bg-gray-700"></div>
        <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900"></div>
      </div>
      <div>
        <div className="text-sm font-semibold text-blue-400 mb-1">
          {year} · {duration}
        </div>
        <h3 className="text-lg font-semibold text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}