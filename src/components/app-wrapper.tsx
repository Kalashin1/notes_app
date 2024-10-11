const AppWrapper = () => {
  return (
    <div className="pr-4 w-[100%] shadow-md grid grid-cols-12 bg-gray-50 p-4 items-center justify-between overflow-hidden">
      <div className="flex col-start-8 md:relative md:left-28 col-span-4 justify-between items-center">
        <input className="rounded-3xl border-2 py-1 border-gray-800 w-72 mr-2" />
        <button className="relative -left-[4.5rem]">
          <i className="fas fa-magnifying-glass" />
        </button>
        <div className="flex justify-evenly items-center relative -left-4">
          <button className="mr-2">
            <i className="fas fa-bell" />
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 text-slate-500 dark:text-navy-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppWrapper;
