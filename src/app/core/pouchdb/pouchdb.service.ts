import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
// const PouchDB = require('pouchdb');

@Injectable({
  providedIn: 'root'
})
export class PouchdbService {
  db;
  lastAddedId: string;

  constructor() {
    console.log('PouchdbService: loaded');
    this.db = new PouchDB('http://localhost:5984/mydatabase');

    // PouchDB.debug.enable('*');
    PouchDB.debug.disable();

    this.db.info().then(info => {
      console.log(info);
    });

    this.addData();

  }

  getRandomInt() {
    return Math.floor(Math.random() * 10000000) + 99999999;
  }

  addData() {
    this.lastAddedId = this.getRandomInt().toString();
    const newDoc = {
      '_id': this.lastAddedId,
      'name': 'Mittens',
      'occupation': 'kitten',
      'age': 3,
      'hobbies': [
        'My random number is ' + this.lastAddedId,
        'chasing laser pointers',
        'lookin\' hella cute'
      ]
    };
    // Create data
    this.db.put(newDoc).then(putDoc => {
      console.log('Create data: putDoc: ', putDoc);
      // Fetch data
      return this.db.get(this.lastAddedId);
    }).then((getDoc) => {
      console.log('Fetch created data: getDoc: ', getDoc);
      // Update data
      getDoc.age = 4;
      return this.db.put(getDoc);
    }).then(updatedDoc => {
      console.log('Update created data ', updatedDoc);
    }).catch(err => {
      console.error('DB error: ', err);
    });

  }
}
