import Link from "next/link";
import {NavComp} from "../../../components/layout";

export default function Product() {
  return (
    <NavComp title="상품" hasTabBar>
      <div className=" flex flex-col py-16 space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link key={i} href={`/product/${i}`}>
            <div className="flex border-b pb-10 cursor-pointer justify-between">
              <div className="flex space-x-5 px-4">
                <div className="w-20 h-20 bg-gray-400 rounded-md" />
                <div className="pt-2 flex flex-col">
                  <h3 className="text-sm font-medium text-gray-400">
                    New IPHone 14
                  </h3>
                  <span className="text-xs text-gray-500">Black</span>
                  <span className="font-medium mt-1 text-gray-900">$95</span>
                </div>
              </div>
              <div className="flex items-end justify-end space-x-2">
                <div className="flex items-center text-sm text-gray-600 space-x-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                  <span>1</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 space-x-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>1</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <button className="fixed bottom-24 right-5 bg-orange-400 rounded-full p-4 text-white shadow-xl hover:bg-orange-600 cursor-pointer transition-colors">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </NavComp>
  );
}
