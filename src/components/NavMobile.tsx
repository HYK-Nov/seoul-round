import courseInfo from "@/assets/courseInfo.json";
import { FaAngleUp, FaBars, FaXmark } from "react-icons/fa6";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer.tsx";
import Logo from "@/components/Logo.tsx";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible.tsx";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";

export default function NavMobile() {
  const beginner = courseInfo.filter((item) => item.difficult == 1);
  const itermediate = courseInfo.filter((item) => item.difficult == 2);
  const advanced = courseInfo.filter((item) => item.difficult == 3);
  const [bgnOpened, setBgnOpened] = useState(false);
  const [itmOpened, setItmOpened] = useState(false);
  const [advOpened, setAdvOpened] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (!isOpened) {
      setBgnOpened(false);
      setItmOpened(false);
      setAdvOpened(false);
    }
  }, [isOpened]);

  return (
    <Drawer direction={"right"} open={isOpened} onOpenChange={setIsOpened}>
      <DrawerTrigger>
        <FaBars className={"text-primary text-3xl md:hidden"} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className={"flex items-center justify-between px-1"}>
            <Logo />
            <DrawerClose asChild>
              <button className={"rounded-md bg-slate-100 p-3"}>
                <FaXmark />
              </button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <div
          className={"flex flex-col gap-4 divide-y overflow-y-auto px-8 py-6"}
        >
          {/* 초급 코스 */}
          <Collapsible>
            <CollapsibleTrigger
              className={"mb-2 flex w-full items-center justify-between py-2"}
              onClick={() => setBgnOpened(!bgnOpened)}
            >
              <p className={"text-xl font-bold"}>초급 코스</p>
              <FaAngleUp
                className={`text-lg transition ${bgnOpened && "rotate-180"}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className={"flex flex-col gap-2"}>
              {beginner.map((item) => (
                <DrawerClose asChild key={item.id}>
                  <NavLink
                    to={`/course/${item.id}`}
                    className="rounded-md border px-4 py-4"
                  >
                    {item.name}
                  </NavLink>
                </DrawerClose>
              ))}
            </CollapsibleContent>
          </Collapsible>
          {/* 중급 코스 */}
          <Collapsible>
            <CollapsibleTrigger
              className={"mb-2 flex w-full items-center justify-between py-2"}
              onClick={() => setItmOpened(!itmOpened)}
            >
              <p className={"text-xl font-bold"}>중급 코스</p>
              <FaAngleUp
                className={`text-lg transition ${itmOpened && "rotate-180"}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className={"flex flex-col gap-2"}>
              {itermediate.map((item) => (
                <DrawerClose asChild key={item.id}>
                  <NavLink
                    to={`/course/${item.id}`}
                    className="rounded-md border px-4 py-4"
                  >
                    {item.name}
                  </NavLink>
                </DrawerClose>
              ))}
            </CollapsibleContent>
          </Collapsible>
          {/* 고급 코스 */}
          <Collapsible>
            <CollapsibleTrigger
              className={"mb-2 flex w-full items-center justify-between py-2"}
              onClick={() => setAdvOpened(!advOpened)}
            >
              <p className={"text-xl font-bold"}>고급 코스</p>
              <FaAngleUp
                className={`text-lg transition ${advOpened && "rotate-180"}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className={"flex flex-col gap-2"}>
              {advanced.map((item) => (
                <DrawerClose asChild key={item.id}>
                  <NavLink
                    to={`/course/${item.id}`}
                    className="rounded-md border px-4 py-4"
                  >
                    {item.name}
                  </NavLink>
                </DrawerClose>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
