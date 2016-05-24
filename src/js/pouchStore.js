/**
 * Created by sepp on 18.05.16.
 */
import PouchDB from 'pouchdb';

class PouchStore {
  constructor() {
    this.db = new PouchDB('foosball');
  }

  savePlayer(player) {
    return new Promise((resolve, reject) => {
      this.db.put(
        { _id : player.name, date : new Date().toISOString() },
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          else{
            reject(err);
          }
        }
      );
    });
  }

  getAllPlayers() {
    return new Promise((resolve, reject) => {
      this.db.allDocs(
        {include_docs: true, descending: true},
        (err, result) => {
          if (!err) {
            resolve(result);
          }
          else{
            reject(err);
          }
        }
      );
    });
  }
}

export default new PouchStore();