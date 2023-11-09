import Link from "next/link";
import Profile from "../../../components/profile";
import {NavComp} from "../../../components/layout";

export default function Chats() {
  return (
    <NavComp title="채팅" canGoback hasTabBar>
      <div className="py-10 divide-y-[1px]">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Link href={`/chats/${i}`} key={i} className="flex flex-col">
            <Profile
              cls={"px-4"}
              profileImgSize="w-10 h-10"
              userName="hahaha"
              userFont="text-lg"
              msg="hoho"
              msgFont="text-md"
            />
          </Link>
        ))}
      </div>
    </NavComp>
  );
}
