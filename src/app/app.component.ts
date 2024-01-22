import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { doc, docData, Firestore } from '@angular/fire/firestore';
export interface contentItem {owner:string,title:string,date:number,datePirsum:number,link1:string,link2:string,link3:string,link4:string,link5:string,tag:string,text:string}
export interface Item extends contentItem { id: string ,insertDate:number }
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Component({  
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public showLinks: boolean = false;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges({ idField: 'customID' }).pipe(
      //sort items by datePirsum
      map(items => items.sort((a, b) => a.datePirsum - b.datePirsum))  
      
    )
  }
  addItem(owner:string,title:string,date:string,datePirsum:string,link1:string,link2:string,link3:string,link4:string,link5:string,tag:string,text:string) {
    // Persist a document id
    console.log(owner,title,date,datePirsum,link1,link2,link3,link4,link5,tag,text);
    Number.parseInt(date);
    const id = this.afs.createId();
    const item: Item = { id, insertDate:new Date().valueOf(),owner,title,date:new Date(date).valueOf(),datePirsum:new Date(datePirsum).valueOf(),link1,link2,link3,link4,link5,tag,text };
    console.log(item.date);
    
    this.itemsCollection.doc(id).set(item);
  }
  deleteItem(item:Item){
    console.log(item)
    // add prompt before  delete item
  const r= confirm("למחק ידיעה ?")
  if (r===false ){return}

              

    this.itemsCollection.doc(item.id).delete();

  }
}
