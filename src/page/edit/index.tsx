import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layouts";
import { getNote, UpdateNote } from "../../helper";
import { Note } from "../../types";
import NoteForm from "../create/components/note-form";

const EditNote = () => {
  const [note, setNote] = useState<Note | null>(null);

  const { id } = useParams();
  useEffect(() => {
    const set_up = async () => {
      if (id) {
        try {
          const result = await getNote(id);
          setNote(result as Note);
        } catch (error) {
          console.log(error)
        }

      }
    };

    set_up();
  }, [id]);

  const handleUpdate = async (id: string, arg: Partial<Note>) => {
    await UpdateNote(id, arg);
    location.reload()
  }
   return (
    <Layout>
      <div className="pt-10 px-4">
        {note &&(<NoteForm note={note} handleUpdate={handleUpdate} isUpdate={true} />)}
      </div>
    </Layout>
  );
}

export default EditNote;