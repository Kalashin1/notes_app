import Layout from "../../components/Layouts";
import NoteForm from "./components/note-form";

const CreateNote = () => {
  return (
    <Layout>
      <div className="pt-10 px-4">
        <NoteForm />
      </div>
    </Layout>
  );
};

export default CreateNote;