import NavPc from "@/components/NavPC.tsx";
import NavMobile from "@/components/NavMobile.tsx";
import Logo from "@/components/Logo.tsx";

export default function Header() {
  return (
    <header className="fixed top-0 flex h-[80px] w-full items-center justify-between bg-white px-[3rem]">
      {/* 로고 */}
      <button
        onClick={() => {
          location.href = "/";
        }}
      >
        <Logo />
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
