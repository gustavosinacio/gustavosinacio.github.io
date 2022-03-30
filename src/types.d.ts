import { Timestamp } from "firebase/firestore";

export interface UserUid extends UserUid {
  userUid?: string;
}

export interface UserNote extends UserUid {
  title: string;
  content: string;
  testData?: boolean;
  moods: string[];
}

export interface RemoveUserTestData extends UserUid {
  refPath: string;
}

export interface NoteData {
  id: string;
  title: string;
  content: string[];
  createdAt: Timestamp;
}
