import { TCourseInfo } from "@/types.ts";

export default function DetailCourseInfo({ data }: { data: TCourseInfo }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
      <div className="flex flex-col items-center gap-2">
        <img src="/image/location.svg" alt="" className="w-12 pb-4" />
        <p className="text-2xl font-extrabold">시작 - 종점</p>
        <p className="text-center text-xl font-bold">{data?.startEnd}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src="/image/map.svg" alt="" className="w-12 pb-4" />
        <p className="text-2xl font-extrabold">거리</p>
        <p className="text-center text-xl font-bold">{data?.distance}km</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src="/image/clock.svg" alt="" className="w-12 pb-4" />
        <p className="text-2xl font-extrabold">소요시간</p>
        <p className="text-center text-xl font-bold">약 {data?.duration}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src="/image/hiking.svg" alt="" className="w-12 pb-4" />
        <p className="text-2xl font-extrabold">난이도</p>
        <div className="flex items-center gap-3">
          <p className="text-center text-xl font-bold">
            {data?.difficult == 1 ? "초" : data?.difficult == 2 ? "중" : "고"}급
          </p>
          <div className="flex">
            {Array.from(Array(data?.difficult)!).map((_) => (
              <img src="/image/star_difficult.svg" className="w-6" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
