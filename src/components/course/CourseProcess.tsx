import { cn } from "@/utils/cn.ts";

export default function CourseProcess({
  data,
}: {
  data: { title: string; isStamp: boolean }[];
}) {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-2 gap-y-6 px-10 text-center text-xl font-bold md:grid-cols-3",
        data.length == 5
          ? "xl:grid-cols-5"
          : data.length == 4
            ? "xl:grid-cols-4"
            : "xl:grid-cols-6",
      )}
    >
      {data.map((item, index) =>
        index == 0 ? (
          <div className="flex w-full flex-col items-center gap-2">
            <div className="flex w-full items-center justify-center gap-4">
              <div className="flex w-full items-end gap-1">
                <img
                  src="/public/image/circle.svg"
                  alt=""
                  className="w-3 translate-y-1/2"
                />
                <div className="h-1/2 w-full border-b-2 border-dotted"></div>
              </div>
              <img
                src={`/public/image/${item.isStamp ? "stamp" : "location"}.svg`}
                className="w-6"
              />
              <div className="h-1/2 w-full border-b-2 border-dotted"></div>
            </div>
            <p className="px-3">{item.title}</p>
          </div>
        ) : index == data.length - 1 ? (
          <div className="flex flex-col items-center gap-2">
            <div className="flex w-full items-center justify-center gap-4">
              <div className="h-1/2 w-full border-b-2 border-dotted"></div>
              <img
                src={`/public/image/${item.isStamp ? "stamp" : "location"}.svg`}
                className="w-6"
              />
              <div className="flex w-full items-end gap-1">
                <div className="h-1/2 w-full border-b-2 border-dotted"></div>
                <img
                  src="/public/image/arrow.svg"
                  alt=""
                  className="h-3 translate-y-1/2 -rotate-90"
                />
              </div>
            </div>
            <p className="px-3">{item.title}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="flex w-full items-center justify-center gap-4 px-[1px]">
              <div className="h-1/2 w-full border-b-2 border-dotted"></div>
              <img
                src={`/public/image/${item.isStamp ? "stamp" : "location"}.svg`}
                className="w-6"
              />
              <div className="h-1/2 w-full border-b-2 border-dotted"></div>
            </div>
            <p className="px-3">{item.title}</p>
          </div>
        ),
      )}
    </div>
  );
}
