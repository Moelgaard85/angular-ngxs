import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import { from } from 'rxjs';
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
  }

  getRandomInt() {
    return Math.floor(Math.random() * 10000000) + 99999999;
  }

  addData(data) {
    return from<any>(
      // create data
      this.db.put(data).then(putDoc => {
        console.log('Create data: putDoc: ', putDoc);
        // Fetch data
        return this.db.get(data._id);
      }).catch(err => {
        console.error('PouchdbService: addData error: ', err);
      })
    );
  }

  updateData(data) {
    // Update data
    return from(this.db.put(data));
  }

  removeData(_id: string) {
    return from(
      this.db.get(_id).then(function (doc) {
        return this.db.remove(doc);
      }).catch(err => {
        console.error('PouchdbService: updateData error: ', err);
      })
    );
  }

  getAllData() {
    console.error('PouchdbService: getAllData called');
    return from(
      this.db.allDocs({ include_docs: true })
        .catch(err => {
          console.error('PouchdbService: getAllData error: ', err);
        })
    );
  }

}
