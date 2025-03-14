import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [invisible, setInvisible] = useState(true);

  const onClickScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 200 ? setInvisible(false) : setInvisible(true),
    );
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    onClickScrollToTop();
  }, [pathname]);

  return (
    <button
      id={"scrollBtn"}
      className={`hover:bg-primary/10 border-primary fixed right-4 bottom-4 flex h-[60px] w-[60px] items-center justify-center rounded-full border-4 bg-white/50 ${invisible && "invisible"}`}
      onClick={onClickScrollToTop}
    >
      <img src="/image/arrow_scroll.svg" className="h-3/4" />
    </button>
  );
}
