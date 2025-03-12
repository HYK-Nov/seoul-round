import courseInfo from "../assets/courseInfo.json";
import { useParams } from "react-router";
import { CourseColor, TCourseInfo } from "@/types.ts";
import TabMenu from "@/components/course/TabMenu.tsx";
import DetailCourseInfo from "@/components/course/DetailCourseInfo.tsx";
import CourseProcess from "@/components/course/CourseProcess.tsx";
import CourseMap from "@/components/course/CourseMap.tsx";
import StampMap from "@/components/course/StampMap.tsx";
import CourseTransport from "@/components/course/CourseTransport.tsx";

export default function Course() {
  const { no } = useParams() as { no: string | number };
  const data: TCourseInfo | undefined = courseInfo.find(
    (item) => item.id == Number(no),
  );

  return (
    <main className="h-auto min-h-screen w-full pt-[80px] break-keep lg:h-screen">
      <div className="p container flex flex-col gap-y-16 pb-30">
        {data && (
          <>
            {/* 코스명 */}
            <div className="flex flex-col gap-3 pt-10">
              <p
                className={"text-5xl font-black"}
                style={{ color: CourseColor[`no${no}`] }}
              >
                {data.name}
              </p>
              <p className="text-2xl font-extrabold text-neutral-500">
                {data?.difficult == 1
                  ? "초"
                  : data.difficult == 2
                    ? "중"
                    : "고"}
                급 코스
              </p>
            </div>
            {/* 탭 메뉴 */}
            <TabMenu curId={no} difficult={data.difficult} />
            {/* 세부 코스 정보 */}
            <DetailCourseInfo data={data} />
            <div className="flex flex-col items-center gap-20">
              {/* 코스 과정 */}
              <CourseProcess data={data.course} />
              {/* 카카오 약도 */}
              <CourseMap data={data.map} />
            </div>
            {/* 스탬프 위치 */}
            <StampMap data={data.stamp} />
            {/* 코스 진입 방법 */}
            <CourseTransport data={data.transport} />
          </>
        )}
      </div>
    </main>
  );
}
