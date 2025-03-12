import { TObjectStringKey } from "@/types.ts";

const MetroLine: TObjectStringKey = {
  "1호선": "Seoul_Metro_Line_1",
  "2호선": "Seoul_Metro_Line_2",
  "3호선": "Seoul_Metro_Line_3",
  "4호선": "Seoul_Metro_Line_4",
  "5호선": "Seoul_Metro_Line_5",
  "6호선": "Seoul_Metro_Line_6",
  "7호선": "Seoul_Metro_Line_7",
  "8호선": "Seoul_Metro_Line_8",
  "9호선": "Seoul_Metro_Line_9",
  수인분당선: "Suin-Bundang_Line",
  신분당선: "Shinbundang_Line",
  우이신설선: "Seoul_Metro_Line_Ui_LRT_Bilingual",
  신림선: "Seoul_Metro_Line_Sillim_Line_Bilingual",
} as const;

export default function CourseTransport({
  data,
}: {
  data: { type: string; subType: string | string[]; text: string }[];
}) {
  const subwayData = data.filter((e) => e.type === "지하철");
  const BusData = data.filter((e) => e.type === "버스");

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full table-fixed text-center text-lg break-keep text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-primary/10 text-xl text-indigo-900 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              교통수단
            </th>
            <th scope="col" className="px-6 py-3">
              호선·버스정류장 번호
            </th>
            <th scope="col" className="px-6 py-3">
              정류장명
            </th>
          </tr>
        </thead>
        <tbody>
          {subwayData.map((e, i) => (
            <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              {i < 1 && (
                <th
                  scope="row"
                  rowSpan={subwayData.length}
                  className="px-6 py-4 text-xl whitespace-nowrap text-gray-900 dark:text-white"
                >
                  지하철
                </th>
              )}
              <td className="flex flex-col gap-2 px-6 py-4">
                {typeof e.subType !== "string" ? (
                  e.subType.length > 1 &&
                  e.subType?.map((item) => (
                    <div className="flex justify-center gap-3">
                      <img
                        src={`/image/subway/${MetroLine[item]}.svg`}
                        className="w-6"
                      />
                      <p>{item}</p>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center gap-3">
                    <img
                      src={`/image/subway/${MetroLine[e.subType]}.svg`}
                      className="w-6"
                    />
                    <p>{e.subType}</p>
                  </div>
                )}
              </td>
              <td className="px-6 py-4">{e.text}</td>
            </tr>
          ))}
          {BusData.map((e, i) => (
            <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              {i < 1 && (
                <th
                  scope="row"
                  rowSpan={BusData.length}
                  className="px-6 py-4 text-xl whitespace-nowrap text-gray-900 dark:text-white"
                >
                  버스
                </th>
              )}
              <td className="flex flex-col gap-2 px-6 py-4">
                {typeof e.subType !== "string" ? (
                  e.subType.length > 1 &&
                  e.subType?.map((item) => (
                    <div className="flex justify-center gap-3">
                      <img src="/image/bus.svg" className="w-6" />
                      <p>{item}</p>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center gap-3">
                    <img src="/image/bus.svg" className="w-6" />
                    <p>{e.subType}</p>
                  </div>
                )}
              </td>
              <td className="px-6 py-4">{e.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
