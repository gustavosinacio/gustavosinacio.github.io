import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { format } from "date-fns";

import { Box, CircularProgress, Typography, useTheme } from "@mui/material";

import { NoteData } from "../../types";
import { getNotes } from "../../utils/firebase";

import { Container } from "./Notes.styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

export const Notes = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);
  const theme = useTheme();

  const [notes, setNotes] = useState<DocumentData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getFirebaseNotes = async () => {
      try {
        const firebaseNotes = await getNotes({ userUid: user?.uid });
        setNotes(firebaseNotes);
      } catch (e) {
        throw e;
      } finally {
        setLoading(false);
      }
    };

    getFirebaseNotes();
  }, [user?.uid]);

  const renderNote = (note: NoteData) => (
    <Container key={note.id}>
      <Box sx={{ padding: "20px 20px 10px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            h5: {
              marginBottom: "8px",
            },
          }}
        >
          <Typography variant="h5">{note.title}</Typography>
        </Box>
        <Typography variant="body1">
          {note.content.map((string: string, index: number) => {
            if (string === "") return <br key={index} />;
            else
              return (
                <span key={index}>
                  {string}
                  <br />
                </span>
              );
          })}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderBottomLeftRadius: theme.borderRadius.small,
          borderBottomRightRadius: theme.borderRadius.small,
          padding: "5px 10px",
        }}
      >
        <Typography variant="subtitle1" color="text">
          {format(note.createdAt.toDate(), "dd/MM/yyyy - HH:mm")}
        </Typography>
      </Box>
    </Container>
  );

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="warning" />
        </Box>
      ) : (
        <Box>
          {notes && notes.length > 0 ? (
            notes.map(renderNote)
          ) : (
            <Typography variant="h6">
              There are no notes from this user
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};
