import { UpdateNote } from "../helper";
import { SCREENS } from "../navigation/constants";
import { Note } from "../types";
import { useNavigate } from "react-router-dom";

const NoteItem = ({
  title,
  contents,
  created,
  id
}: Note) => {
  const navigate = useNavigate()
  return (
    <div className="flex cursor-pointer flex-col bg-white rounded-lg border-b p-2.5 font-semibold text-slate-700 hover:bg-slate-100 dark:border-navy-500 dark:text-navy-100 dark:hover:bg-navy-600 sm:flex-row sm:items-center">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 sm:w-72">
          <div className="flex">
            <label
              className="flex h-8 w-8 items-center justify-center"
              data-tooltip="Select"
            >
              <input
                className="form-checkbox is-outline h-4.5 w-4.5 rounded border-slate-400/70 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
                type="checkbox"
              />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <h3
              className="line-clamp-1"
              onClick={() => navigate(SCREENS.NOTE(id))}
            >
              {title}
            </h3>
            <span className="h-2 w-2 shrink-0 rounded-full bg-secondary lg:hidden"></span>
          </div>
        </div>
        <div className="shrink-0 px-1 text-xs sm:hidden">Dec 03</div>
      </div>
      <div className="flex flex-1 items-center justify-between space-x-2">
        <div
          className="flex items-center space-x-2 px-2"
          onClick={() => navigate(SCREENS.NOTE(id))}
        >
          <span className="line-clamp-1">{contents?.slice(0, 20)}</span>
        </div>
        <div className="flex sm:hidden">
          <button
            data-tooltip="Starred"
            className="btn h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="1.5"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              ></path>
            </svg>
          </button>
          <button
            data-tooltip="Actions"
            className="btn h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="1.5"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden px-2 text-xs+ sm:flex justify-between items-center">
        {new Date(created)?.getDate()}-{new Date(created).getMonth()}-
        {new Date(created).getFullYear()}
        <button
          data-tooltip="Actions"
          className="btn h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          onClick={async (e) => {
            e.stopPropagation();
            navigate(SCREENS.EDIT_NOTE(id));
          }}
        >
          <i className="fas fa-edit text-green-500" />
        </button>
        <button
          data-tooltip="Actions"
          className="btn h-8 w-8 rounded-full p-0 text-slate-400 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-300 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          onClick={async (e) => {
            e.stopPropagation();
            if (confirm("are you sure you want to delete this note")) {
              await UpdateNote(id, { status: "DELETED", isDeleted: true });
              location.reload();
            }
          }}
        >
          <i className="fas fa-trash text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
