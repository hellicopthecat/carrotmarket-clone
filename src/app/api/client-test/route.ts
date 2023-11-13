import {NextResponse} from "next/server";
import client from "../../../../util/client";
//Next JS에서 req,res object를 제공하는데 TS사용한다면 다음과 같이 지정
export async function GET() {
  await client.user.create({
    data: {
      name: "hahah",
      email: "11@22.22",
    },
  });
  return NextResponse.json({
    ok: true,
    data: "xxx",
  });
}
