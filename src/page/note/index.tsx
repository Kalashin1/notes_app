import { useEffect, useState } from "react";
import Layout from "../../components/Layouts";
import NoteComponent from "../../components/note";
import { useParams } from "react-router-dom";
import { getNote } from "../../helper";
import { Note as NoteType } from "../../types";

const Note = () => {
  const [note, setNote] = useState<NoteType | null>(null);

  const { id } = useParams();
  useEffect(() => {
    const set_up = async () => {
      if (id) {
        try {
          const result = await getNote(id);
          setNote(result as NoteType);
        } catch (error) {
          alert("error getting note");
          console.log("error", error);
        }

      }
    };

    set_up();
  }, [id]);

  return (
    <Layout>
      <div className="py-10 px-4">{note && <NoteComponent {...note} />}</div>
    </Layout>
  );
};

export default Note;
