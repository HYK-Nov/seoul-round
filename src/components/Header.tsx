import NavPc from "@/components/NavPC.tsx";
import NavMobile from "@/components/NavMobile.tsx";

export default function Header() {
  return (
    <header className="fixed top-0 flex h-[80px] w-full items-center justify-between bg-white px-[3rem]">
      {/* 로고 */}
      <button
        className="tenada text-primary text-4xl font-extrabold italic"
        onClick={() => {
          location.href = "/";
        }}
      >
        서울한바퀴
      </button>

      <div className={"flex items-center"}>
        {/* PC메뉴 */}
        <NavPc />
        {/* 모바일 메뉴 */}
        <NavMobile />
      </div>
    </header>
  );
}
