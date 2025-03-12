import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { cn } from "@/utils/cn.ts";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from "react-router";

const bgnComponents: { title: string; href: string }[] = [
  { title: "4코스 망우·용마산", href: "/course/4" },
  { title: "6코스 고덕산", href: "/course/6" },
  { title: "7코스 일자산", href: "/course/7" },
  { title: "8코스 장지·탄천", href: "/course/8" },
  { title: "13코스 안양천 상류", href: "/course/13" },
  { title: "14코스 안양천 하류", href: "/course/14" },
  { title: "15코스 노을·하늘공원", href: "/course/15" },
];
const itmComponents: { title: string; href: string }[] = [
  { title: "3코스 불암산", href: "/course/3" },
  { title: "5코스 아차산", href: "/course/5" },
  { title: "10코스 우면산", href: "/course/10" },
  { title: "11코스 관악산", href: "/course/11" },
  { title: "12코스 호암산", href: "/course/12" },
  { title: "17코스 북한산 은평", href: "/course/17" },
  { title: "18코스 북한산 종로", href: "/course/18" },
  { title: "19코스 북한산 성북", href: "/course/19" },
  { title: "20코스 북한산 강북", href: "/course/20" },
  { title: "21코스 북한산 도봉", href: "/course/21" },
];
const advComponents: { title: string; href: string }[] = [
  { title: "1코스 수락산", href: "/course/1" },
  { title: "2코스 덕릉고개", href: "/course/2" },
  { title: "9코스 대모·구룡산", href: "/course/9" },
  { title: "16코스 봉산·앵봉산", href: "/course/16" },
];

export default function NavPc() {
  return (
    <NavigationMenu className={"hidden md:inline-flex"}>
      <NavigationMenuList className={"flex gap-12"}>
        <NavigationMenuItem className={"relative px-2"}>
          <NavigationMenuTrigger
            className={
              "text-primary group flex items-center gap-2 text-xl font-black"
            }
          >
            <p>초급 코스</p>
            <FaAngleDown className="text-base transition duration-400 group-hover:-rotate-180" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className={"absolute -inset-x-6 mt-2"}>
            <ul className="flex w-fit flex-col gap-y-1 rounded bg-white p-2 drop-shadow-sm">
              {bgnComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className={"relative px-2"}>
          <NavigationMenuTrigger
            className={
              "text-primary group flex items-center gap-2 text-xl font-black"
            }
          >
            <p>중급 코스</p>
            <FaAngleDown className="text-base transition duration-400 group-hover:-rotate-180" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className={"absolute -inset-x-6 mt-2"}>
            <ul className="flex w-fit flex-col gap-y-1 rounded bg-white p-2 drop-shadow-sm">
              {itmComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className={"relative px-2"}>
          <NavigationMenuTrigger
            className={
              "text-primary group flex items-center gap-2 text-xl font-black"
            }
          >
            <p>고급 코스</p>
            <FaAngleDown className="text-base transition duration-400 group-hover:-rotate-180" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className={"absolute -inset-x-6 mt-2"}>
            <ul className="flex w-fit flex-col gap-y-1 rounded bg-white p-2 drop-shadow-sm">
              {advComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({
  className,
  title,
  children,
  ref,
  href,
  ...props
}: React.ComponentProps<"a">) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NavLink
          to={href!}
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
        </NavLink>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
