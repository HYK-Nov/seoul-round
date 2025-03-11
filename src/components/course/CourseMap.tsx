export default function CourseMap({
  data,
}: {
  data: { location: string; image: string };
}) {
  return (
    <div className="h-full w-3/4 max-w-[700px]">
      <div>
        <a href={data.location} target="_blank">
          <img className="map" src={data.image} width="100%" height="100%" />
        </a>
      </div>
    </div>
  );
}
