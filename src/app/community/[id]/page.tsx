import Profile from "../../../../components/profile";

export default function CommunityDetail() {
  return (
    <div>
      <span className="inlineflex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 my-3">
        동네질문
      </span>
      <Profile
        cls={"border-t border-b px-4"}
        profileImgSize="w-10 h-10"
        userName="Steve Jebs"
        userFont="text-gray-700"
        msg={"View Profile &rarr;"}
        msgFont="text-gray-400"
      />
      <div>
        <div className="mt-2 text-gray-700 px-5">
          <span className="text-orange-500 font-medium">Q.</span> What is the
          best mandu restaurant?
        </div>

        <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[1px] w-full px-5">
          <span className=" flex space-x-2 items-center text-sm">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className=" flex space-x-2 items-center text-sm">
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
            <span>답변 1</span>
          </span>
        </div>
      </div>
      <div className="px-4 my-5 space-y-5">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-sky-200 rounded-full" />
          <div>
            <span className="text-sm block font-medium text-gray-700">
              Steve Jebs
            </span>
            <span className="text-xs block text-gray-500">2시간 전</span>
            <p className="text-gray-700 mt-2">
              The best mandu restaurant is the one next to my house.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <textarea
          rows={4}
          className="mt-1 shadow-sm w-full  focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
          placeholder="Answer this question!"
        />
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none mt-2">
          Reply
        </button>
      </div>
    </div>
  );
}
