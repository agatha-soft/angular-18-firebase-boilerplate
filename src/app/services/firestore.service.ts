import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocFromServer, setDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore
  ) { }

  // #region Requests to single documents
  private async createDocument(docPath: string, data: any): Promise<void> {
    const docReference = doc(this.firestore, docPath);
    await setDoc(docReference, data);
  }


  private async addDocument(collectionPath: string, data: any) {
    const collectionRef = collection(this.firestore, collectionPath);
    const doc = await addDoc(collectionRef, data);
    return doc.id;
  }

  private async getDocument<T>(docPath: string): Promise<T | null> {
    const docReference = doc(this.firestore, docPath);
    const docSnap = await getDocFromServer(docReference);
    if (docSnap.exists()) {
      return docSnap.data() as T;
    }
    return null;
  }

  private async updateDocument(collectionPath: string, data: any): Promise<void> {
    const docRef = doc(this.firestore, collectionPath);
    await updateDoc(docRef, data);
  }

  private async deleteDocument(docPath: string): Promise<void> {
    const docRef = doc(this.firestore, docPath);
    await deleteDoc(docRef);
  }
  // #endregion

  // Requests to collections

  // Requests to Collections Group
}