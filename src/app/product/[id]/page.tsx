import Profile from "../../../../components/profile";

export default function ProductDetail() {
  return (
    <div className="px-4 py-10">
      <div className="mb-10">
        <div className="h-96 bg-gray-200" />
        <Profile
          cls={"border-t border-b px-4"}
          profileImgSize="w-10 h-10"
          userName="Steve Jebs"
          userFont="text-gray-700"
          msg={"View Profile &rarr;"}
          msgFont="text-gray-400"
        />
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900"> Galaxy s50</h1>
          <span className="text-3xl mt-3 text-gray-800 block">$140</span>
          <p className="my-6 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex items-center justify-between space-x-2">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 font-medium hover:bg-orange-600 transition-colors">
              Talk to seller
            </button>
            <button className="p-3 rounded-md flex items-center justify-center hover:bg-gray-200">
              <svg
                className="h-6 w-6 "
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full bg-gray-300 mb-4" />
              <h3 className=" text-gray-700 -mb-1">Galaxy S60</h3>
              <span className="text-sm font-medium text-gray-900">$6</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
