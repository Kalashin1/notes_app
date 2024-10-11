import { FormEvent, useRef } from "react";
import { createNote } from "../../../helper";
import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";
import { Note } from "../../../types";

const NoteForm = ({
  note,
  handleUpdate,
  isUpdate,
}: {
  note?: Note;
  handleUpdate?: (id: string, arg: Partial<Note>) => Promise<void>;
  isUpdate?: boolean;
}) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const {
        note_title: { value: note_title },
        note_body: { value: note_body },
      } = formRef.current!;
      if (isUpdate && handleUpdate && note)
        await handleUpdate(note.id, { title: note_title, contents: note_body });
      else await createNote({ title: note_title, contents: note_body });
      navigate(SCREENS.HOME);
    } catch (error) {
      alert("error creating note");
      console.log("error", error);
    }
  };
  return (
    <form className="col-span-12 lg:pb-6" ref={formRef} onSubmit={handleSubmit}>
      <div className="rounded-lg shadow-lg bg-slate-100 p-4">
        <div className="mt-6 font-inter text-base text-slate-600 dark:text-navy-200">
          <input
            placeholder="Enter your title"
            name="note_title"
            defaultValue={note?.title}
            className="text-xl w-full py-6 bg-transparent focus:outline-none focus:border-b-2 border-slate-400 mb-8 font-medium text-slate-900 dark:text-navy-50 lg:text-2xl"
          />

          <textarea
            className="mt-1 w-full py-4 bg-transparent outline-0  focus:outline-0 rounded-lg"
            placeholder="Enter the body of your note"
            rows={9}
            defaultValue={note?.contents}
            name="note_body"
          ></textarea>

          <button className="bg-green-500 text-white rounded-2xl shadow-md px-6 py-2">
            {isUpdate ? 'Edit': 'Create'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
