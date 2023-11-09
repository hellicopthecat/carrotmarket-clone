import Link from "next/link";
import {clss} from "../util/util";

interface IProfileProps {
  cls?: string;
  profileImgSize: string;
  userName: string;
  userFont: string;
  msg?: string;
  msgFont: string;
}
export default function Profile({
  cls = "",
  profileImgSize,
  userName,
  userFont,
  msg,
  msgFont,
}: IProfileProps) {
  return (
    <div className={clss(cls, "flex items-center mb-3 space-x-3 py-3")}>
      <div className={clss(profileImgSize, "rounded-full bg-slate-800")} />
      <div className="text-xs font-medium">
        <p className={clss(userFont)}>{userName}</p>
        {!msg ? null : msg.includes("Edit profile") ? (
          <Link
            href={`/userprofile/${userName.replace(/\s/g, "_").toLowerCase()}`}
          >
            <p className={msgFont}>{msg}</p>
          </Link>
        ) : (
          <p className={msgFont}>{msg}</p>
        )}
      </div>
    </div>
  );
}
