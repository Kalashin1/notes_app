import { useEffect, useState } from "react";
import Layout from "../../components/Layouts";
import TodoItem from "../../components/note-item";
import TodoPageHeader from "../../components/note-page-header";
import { Note } from "../../types";
import { getDeletedNotes } from "../../helper";

const DeletedNotes = function () {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const result = await getDeletedNotes();
      console.log(result.items);
      setNotes(result.items as Note[]);
    };

    fetchNotes();
  }, []);

  return (
    <Layout>
      <div className="p-4">
        <TodoPageHeader />
        <div className="bg-gray-50 shadow-lg rounded-lg w-full">
          {notes && notes.map((note, index) => <TodoItem key={index} {...note} />)}
        </div>
      </div>
    </Layout>
  );
};

export default DeletedNotes;
