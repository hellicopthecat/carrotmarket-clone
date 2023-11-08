import {clss} from "../util/util";

interface IProfileProps {
  cls: string;
  msg: string;
}
export default function Profile({cls, msg}: IProfileProps) {
  return (
    <div
      className={clss(
        cls,
        "flex px-3 mb-3 cursor-pointer items-center space-x-3 py-3"
      )}
    >
      <div className="w-10 h-10 rounded-full bg-slate-300" />
      <div className="text-xs font-medium">
        <p className="text-gray-700">Steve Jebs</p>
        <p className="text-gray-400">{msg}</p>
      </div>
    </div>
  );
}
