import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
export interface contentItem {owner:string,title:string,date:number,datePirsum:number,link1:string,link2:string,link3:string,link4:string,link5:string,tag:string,mainTag:string,text:string}
export interface Item extends contentItem { customID: string ,insertDate:number }
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {  FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
@Component({  
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public showLinks: boolean = false;
  
  private itemsCollection: AngularFirestoreCollection<Item>;

  public itemGroup:FormGroup
  items: Observable<Item[]>;

  constructor(private readonly afs: AngularFirestore,private readonly fb: NonNullableFormBuilder) {
    this.itemGroup= this.fb.group({
      customID:new FormControl<string>(''),
      owner:new FormControl<string>('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)],),
      title:new FormControl<string>('',[Validators.required,Validators.minLength(2)]),
      date:new FormControl<string>(''),
      datePirsum:new FormControl<string>('',[Validators.required,Validators.minLength(2)]),
      link1:new FormControl<string>(''),
      link2:new FormControl<string>(''),
      link3:new FormControl<string>(''),
      link4:new FormControl<string>(''),
      link5:new FormControl<string>(''),
      tag:new FormControl<string>('',[Validators.minLength(2)]),
      mainTag:new FormControl<string>('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)]),
      text:new FormControl<string>('',[Validators.required,Validators.minLength(10)]),
  })
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges({ idField: 'customID' }).pipe(
      //sort items by datePirsum
      map(items => items.sort((a, b) => a.datePirsum - b.datePirsum))  
      
    )
  }
  addItem() {
    // Persist a document id
    console.log(this.itemGroup);
    console.log({a:'test',...this.itemGroup.value});
    if (this.itemGroup.invalid){return}
    let date  :string|number= this.itemGroup.controls['date'].value 
    let datePirsum :string|number= this.itemGroup.controls['datePirsum'].value 
    date =new Date(date?date:0).valueOf();
    datePirsum =new Date(datePirsum?datePirsum:0).valueOf();
    const customID = this.itemGroup.controls['customID'].value  ?this.itemGroup.controls['customID'].value: this.afs.createId();
    const item: Item = { customID, insertDate:new Date().valueOf(),...this.itemGroup.value };
   
    
    this.itemsCollection.doc(customID).set(item).then(res=>{
      const name= this.itemGroup.controls['owner'].value
      this.itemGroup.reset()
      this.itemGroup.controls['owner'].setValue(name)
    })
  }
  editItem(item:Item){
    //insert each value in Item object to this.itemGroup
    this.itemGroup.patchValue(item)
    console.log("edit")
  }
  deleteItem(item:Item){
    console.log(item)
    // add prompt before  delete item
  const r= confirm("למחק ידיעה ?")
  if (r===false ){return}


    this.itemsCollection.doc(item.customID).delete();

  }
}
