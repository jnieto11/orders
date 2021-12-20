import { Component, OnInit } from '@angular/core';

import orders from '../../models/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listFilter: any = [
    { name: "Marca", item: 'FirmCode' },
    { name: "Articulo", item: 'ItemCode' },
    { name: "Categoria", item: 'CategoriaCode' },
    { name: "Vendedor", item: 'SlpCode' },
    { name: "Cliente", item: 'CardCode' },
    { name: "# pedido", item: 'DocNum' }]

  // SlpCode = vendedor, 
  // CardCode = cliente, 
  // DocNum = nuemero del pedido, 
  // ItemCode = articulo, 
  // FirmCode = marca, 
  // CategoriaCode = categoria

  tempfilters: any = [];
  items: any;
  tempitems: any = [];
  constructor() { }

  ngOnInit(): void {
    // console.log(JSON.stringify(orders));
    this.items = [{
      "DocEntry": 89280,
      "DocNum": 30042028,
      "CardCode": "CN-1123088513",
      "CardName": "BREIDY STIVEN COTRINA RIOS",
      "GroupCode": 145,
      "GroupName": "*TIENDAS POS",
      "SlpCode": 1135,
      "SlpName": "Servicio Al Cliente",
      "ItemCode": "SOSWREPSWA2050-001",
      "ItemName": "REPUES SWA2050 INTERRUPTOR DE POTENCIA",
      "FirmCode": 117,
      "FirmName": "SWEISS SOLDADURA",
      "CategoriaCode": "57",
      "CategoriaName": "Repuestos",
      "Subgrupo": "Mma",
      "UEN": "SOLDADURA",
      "Quantity": 1.000000,
      "OpenQty": 1.000000,
      "LineTotal": 33529.410000,
      "WhsCode": "32CSCBOG",
      "PRODUCCION": 0.000000,
      "TRANSITO": 0.000000,
      "CANAL": "CENTROS DE SERVICIOS"
    },
    {
      "DocEntry": 89357,
      "DocNum": 30042083,
      "CardCode": "SD-800242106-13",
      "CardName": "SODIMAC PALMIRA UNICENTRO",
      "GroupCode": 144,
      "GroupName": "ALMACEN CADENA",
      "SlpCode": 52,
      "SlpName": "Fernando Sierra HC - Dist",
      "ItemCode": "SOELSI7160DV",
      "ItemName": "SOLDADOR ARC160S 110/220V ELITE",
      "FirmCode": 182,
      "FirmName": "ELITE SOLDADURA",
      "CategoriaCode": "38",
      "CategoriaName": "Mma pro",
      "Subgrupo": "na",
      "UEN": "SOLDADURA",
      "Quantity": 8.000000,
      "OpenQty": 8.000000,
      "LineTotal": 3999528.000000,
      "WhsCode": "00CAYENA",
      "PRODUCCION": 0.000000,
      "TRANSITO": 0.000000,
      "CANAL": "ALMACEN CADENA"
    }
    ];


  }

  // its just list data from here down
  public list = [
    {
      title: 'childless',
      children: []
    },
    {
      title: 'great grandparent',
      children: [
        {
          title: 'childless grandsibiling',
          children: []
        },
        {
          title: 'grandparent',
          children: [
            {
              title: 'childless sibiling',
              children: []
            },
            {
              title: 'another childless sibiling',
              children: []
            },
            {
              title: 'parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
                {
                  title: 'another child',
                  children: []
                },
              ]
            },
            {
              title: 'another parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
              ]
            },
          ]
        },
        {
          title: 'another grandparent',
          children: [
            {
              title: 'parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
                {
                  title: 'another child',
                  children: []
                },
                {
                  title: 'a third child',
                  children: []
                },
                {
                  title: 'teen mother',
                  children: [
                    {
                      title: 'accident',
                      children: []
                    },
                  ]
                },
              ]
            },
          ]
        },
      ]
    },
  ];



  // SlpCode = vendedor, 
  // CardCode = cliente, 
  // DocNum = nuemero del pedido, 
  // ItemCode = articulo, 
  // FirmCode = marca, 
  // CategoriaCode = categoria

  datos: any = [];
  filter: string = '';

  selectItem(item: any) {
    if (this.tempfilters.indexOf(item) === -1) {
      this.tempfilters.push(item);
    } else {
      this.removeItem(item);
    }
    this.filter = item.item;
    if (this.datos.length == 0) {
      this.items.forEach((e: any) => {
        (this.datos.find((x: any) => x.desc === e[item.item]) == undefined) ? this.datos.push({ 'desc': e[item.item], array: [e] }) : '';
      });
    
    } else {
      console.log(this.filtertest(this.datos))      
    }
 
  }




  filtertest(obj: any):any {
    var array:any=[]
    obj.forEach((e: any) => {
      if (e.array) {
        this.filtertest(e.array);
      } else {
        (array.find((x: any) => x.desc === this.filter) == undefined) ? array.push({ 'desc': this.filter, array: [e] }) : 'X';
        e.array = array;       
      }    
    });    
    return obj; 
  }





  removeItem(item: any) {
    this.tempfilters = this.tempfilters.filter((sub: any) => sub !== item);
  }


}
