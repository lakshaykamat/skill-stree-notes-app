type NoteType = {
  id: string;
  title: string;
  text: string;
  labels: Array<string>;
  isArchive: boolean;
  color: { light: string; dark: string };
};
