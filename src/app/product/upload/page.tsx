export default function ProductUpload() {
  return (
    <div className="px-4 py-16">
      <div>
        <div>
          <label className=" cursor-pointer w-full flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md text-gray-600 hover:text-orange-500 hover:border-orange-500">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="my-5">
        <label
          htmlFor="price"
          className="text-sm font-medium text-gray-700 mb-1 block"
        >
          Price
        </label>
        <div className="rounde-md shadow-sm relative flex items-center">
          <div className="pointer-events-none absolute left-0 pl-3 flex items-center justify-center">
            <span className=" text-gray-500 text-sm">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="appearance-none w-full pl-7 px-3 py-2 border border-gray-300 rounded-r-md rounded-l-none shadow-sm placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="pointer-events-none absolute right-0 pr-3 flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          id="desc"
          className="text-sm font-medium text-gray-700 mb-1 block"
        >
          Description
        </label>

        <textarea
          id="desc"
          rows={4}
          className="mt-1 shadow-sm w-full  focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        />
      </div>
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none mt-4">
        Upload product
      </button>
    </div>
  );
}
