import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "../lib/firebase";

const EVENTS_COLLECTION = "evenements";

const NOT_CONFIGURED_ERROR = new Error(
  "Firebase n'est pas configuré (variables VITE_FIREBASE_* manquantes)."
);

export function subscribeToEvents(onChange, onError) {
  if (!isFirebaseConfigured) {
    onError?.(NOT_CONFIGURED_ERROR);
    return () => {};
  }

  const eventsQuery = query(
    collection(db, EVENTS_COLLECTION),
    orderBy("date", "asc")
  );

  return onSnapshot(
    eventsQuery,
    (snapshot) => {
      const events = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      onChange(events);
    },
    onError
  );
}

export function addEvent(event) {
  if (!isFirebaseConfigured) return Promise.reject(NOT_CONFIGURED_ERROR);
  return addDoc(collection(db, EVENTS_COLLECTION), {
    ...event,
    createdAt: serverTimestamp(),
  });
}

export function updateEvent(id, event) {
  if (!isFirebaseConfigured) return Promise.reject(NOT_CONFIGURED_ERROR);
  return updateDoc(doc(db, EVENTS_COLLECTION, id), event);
}

export function deleteEvent(id) {
  if (!isFirebaseConfigured) return Promise.reject(NOT_CONFIGURED_ERROR);
  return deleteDoc(doc(db, EVENTS_COLLECTION, id));
}
