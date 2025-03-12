export type TObjectStringKey = {
  [key: string]: string;
};

export type TCourseInfo = {
  id: number;
  name: string;
  startEnd: string;
  distance: number;
  duration: string;
  difficult: number;
  course: { title: string; isStamp: boolean }[];
  map: { location: string; image: string };
  stamp: { title: string; location: string }[];
  transport: { type: string; subType: string | string[]; text: string }[];
};

export const CourseColor: TObjectStringKey = {
  no1: "#c54e05",
  no2: "#d73c2c",
  no3: "#454F7D",
  no4: "#9E5499",
  no5: "#be43aa",
  no6: "#007cbc",
  no7: "#1b8192",
  no8: "#445C57",
  no9: "#008704",
  no10: "#387D57",
  no11: "#A14F8C",
  no12: "#8e57bf",
  no13: "#be4f68",
  no14: "#ce3f3f",
  no15: "#87674D",
  no16: "#9C7C56",
  no17: "#835573",
  no18: "#847513",
  no19: "#30713c",
  no20: "#247D6E",
  no21: "#008189",
} as const;
