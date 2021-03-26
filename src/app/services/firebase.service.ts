import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
    providedIn: 'root'
  })
  

    export class FirebaseService {

        collectionName = 'rooms';
        //roomname = '';
      
        constructor(
          private firestore: AngularFirestore
        ) { }
      
        
        read_room() {
          return this.firestore.collection(this.collectionName).snapshotChanges();
        }

        getAllRoom() {
          return this.firestore.collection(this.collectionName).snapshotChanges();
        }
      
        
      }