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
