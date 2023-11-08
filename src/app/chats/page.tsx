import Link from "next/link";
import Profile from "../../../components/profile";

export default function Chats() {
  return (
    <div className="py-10 divide-y-[1px]">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Link href={`/chats/${i}`} key={i} className="flex flex-col">
          <Profile cls={"px-4"} msg="hoho" />
        </Link>
      ))}
    </div>
  );
}
