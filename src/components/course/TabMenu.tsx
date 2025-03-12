import courseInfo from "@/assets/courseInfo.json";
import { cn } from "@/utils/cn.ts";
import { NavLink } from "react-router";

const CURSTYLE: { [key: number]: string } = {
  1: "text-no1 border-no1",
  2: "text-no2 border-no2",
  3: "text-no3 border-no3",
  4: "text-no4 border-no4",
  5: "text-no5 border-no5",
  6: "text-no6 border-no6",
  7: "text-no7 border-no7",
  8: "text-no8 border-no8",
  9: "text-no9 border-no9",
  10: "text-no10 border-no10",
  11: "text-no11 border-no11",
  12: "text-no12 border-no12",
  13: "text-no13 border-no13",
  14: "text-no14 border-no14",
  15: "text-no15 border-no15",
  16: "text-no16 border-no16",
  17: "text-no17 border-no17",
  18: "text-no18 border-no18",
  19: "text-no19 border-no19",
  20: "text-no20 border-no20",
  21: "text-no21 border-no21",
} as const;
const OTHERSTYLE: { [key: number]: string } = {
  1: "hover:text-no1 hover:border-no1",
  2: "hover:text-no2 hover:border-no2",
  3: "hover:text-no3 hover:border-no3",
  4: "hover:text-no4 hover:border-no4",
  5: "hover:text-no5 hover:border-no5",
  6: "hover:text-no6 hover:border-no6",
  7: "hover:text-no7 hover:border-no7",
  8: "hover:text-no8 hover:border-no8",
  9: "hover:text-no9 hover:border-no9",
  10: "hover:text-no10 hover:border-no10",
  11: "hover:text-no11 hover:border-no11",
  12: "hover:text-no12 hover:border-no12",
  13: "hover:text-no13 hover:border-no13",
  14: "hover:text-no14 hover:border-no14",
  15: "hover:text-no15 hover:border-no15",
  16: "hover:text-no16 hover:border-no16",
  17: "hover:text-no17 hover:border-no17",
  18: "hover:text-no18 hover:border-no18",
  19: "hover:text-no19 hover:border-no19",
  20: "hover:text-no20 hover:border-no20",
  21: "hover:text-no21 hover:border-no21",
} as const;

function CategoryButton({
  id,
  name,
  curId,
}: {
  id: string | number;
  name: string;
  curId: string | number;
}) {
  return (
    <NavLink to={`/course/${id}`}>
      <button
        className={cn(
          "w-full rounded-full border-4 px-6 py-3 text-left",
          curId == id
            ? `${CURSTYLE[Number(curId)]} font-bold`
            : `${OTHERSTYLE[Number(id)]} border-slate-300 text-slate-500 transition hover:font-bold`,
        )}
      >
        {name}
      </button>
    </NavLink>
  );
}

export default function TabMenu({
  curId,
  difficult,
}: {
  curId: string | number;
  difficult: string | number;
}) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-lg md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {courseInfo
        .filter((item) => item.difficult == difficult)
        .map((item) => (
          <CategoryButton
            id={item.id}
            name={item.name}
            key={item.id}
            curId={curId}
          />
        ))}
    </div>
  );
}
