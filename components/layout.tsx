"use client";

import Link from "next/link";
import {clss} from "../util/util";
import {useRouter} from "next/navigation";
import {MouseEventHandler} from "react";

interface ILayoutProps {
  title?: string;
  canGoback?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export function NavComp({title, canGoback, hasTabBar, children}: ILayoutProps) {
  const router = useRouter();
  const goBackBtn: MouseEventHandler<HTMLButtonElement> = () => router.back();
  return (
    <div>
      <div
        className={clss(
          !canGoback ? "justify-center" : "",
          "bg-white w-full max-w-xl text-lg px-10 font-medium py-3 fixed text-gray-800 border-b top-0 flex items-center"
        )}
      >
        {canGoback ? (
          <button onClick={goBackBtn}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        ) : null}
        {title ? <span>{title}</span> : null}
      </div>
      <main
        className={clss(
          "pt-12 w-full max-w-xl mx-auto",
          hasTabBar ? "pb-24" : ""
        )}
      >
        {children}
      </main>
      <div className={clss("pt-12", hasTabBar ? "pb-24" : "")}></div>
      {hasTabBar ? (
        <nav>
          <ul className="flex justify-around">
            <li>
              <Link href={`/`}>HOME</Link>
            </li>
            <li>
              <Link href={"/product"}>product</Link>
            </li>
            <li>
              <Link href={"/live"}>live</Link>
            </li>
            <li>
              <Link href={"/community"}>community</Link>
            </li>
            <li>
              <Link href={"/chats"}>chats</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
