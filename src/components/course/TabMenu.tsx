import courseInfo from "../../assets/courseInfo.json";
import { cn } from "@/lib/utils.ts";
import { NavLink } from "react-router";

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
            ? `text-no${curId} border-no${curId} font-bold`
            : `border-slate-300 text-slate-500 transition hover:font-bold hover:text-no${id} hover:border-no${id} `,
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
