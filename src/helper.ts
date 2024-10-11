import Pocketbase from "pocketbase";
import { Note } from "./types";

const pb = new Pocketbase("http://127.0.0.1:8090");

export const getNotes = async () => {
  const result = await pb.collection("notes").getList(1, 10, {
    filter:  'status != "DELETED"'
  });
  return result;
};

export const getDeletedNotes = async () => {
  const result = await pb.collection("notes").getList(1, 10, {
    filter:  'status = "DELETED"'
  });
  return result;
};

export const createNote = async ({ title, contents }: Partial<Note>) => {
  const note = await pb.collection("notes").create({
    title,
    contents,
    status: "PENDING",
    isDeleted: false,
  });
  return note;
};

export const getNote = async (id: string) => {
  const result = await pb.collection("notes").getOne(id);
  return result;
};

export const UpdateNote = async (
  id: string,
  {
    title,
    contents,
    status,
    isDeleted,
  }: Partial<Pick<Note, "title" | "contents" | "status" | "isDeleted">>
) => {
  const record = await pb.collection("notes").update(id, {
    title,
    contents,
    status,
    isDeleted,
  });
  return record;
};
