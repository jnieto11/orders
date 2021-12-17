import { Component, OnInit } from '@angular/core';

import orders from '../../models/data';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listFilter: any = [
    { name: "Marca" },
    { name: "Articulo" },
    { name: "Categoria" },
    { name: "Vendedor" },
    { name: "Cliente" },
    { name: "# pedido" }]

  tempfilters: any = [];
  items:any;
  constructor() { }

  ngOnInit(): void {
    console.log(orders);
    this.items = orders;
  
  }

  selectItem(item: any) {
    if (this.tempfilters.indexOf(item) === -1) {
      this.tempfilters.push(item);
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: any) {
    this.tempfilters = this.tempfilters.filter((sub: any) => sub !== item);
  }


}
