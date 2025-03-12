import { Link } from "react-router";
import { cn } from "@/utils/cn.ts";

export default function StampMap({
  data,
}: {
  data: { title: string; location: string }[];
}) {
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="flex items-center gap-4">
        <img src="/image/stamp.svg" alt="" className="w-10" />
        <p className="text-4xl font-black">스탬프 시설위치</p>
      </div>
      <div
        className={cn(
          "grid grid-cols-1 justify-items-center gap-x-2 gap-y-4",
          data.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2",
        )}
      >
        {data.map((item) => (
          <Link to={item.location} target={"_blank"}>
            <button className="bg-primary hover:bg-primary-dark flex w-fit items-center gap-2 rounded-full px-5 py-3 font-bold text-white transition duration-75 hover:text-white">
              <img src="/image/location_reverse.svg" className="w-6" />
              <p className="text-lg">{item.title}</p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
