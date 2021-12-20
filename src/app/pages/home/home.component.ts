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

  tempfilters: any = [
    { name: "Marca" },
    { name: "Articulo" },
    { name: "Categoria" }
  ];
  items: any;
  tempitems: any = [];
  constructor() { }

  ngOnInit(): void {
    console.log(orders);
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
    }];


  }

  tst = [{
    desc: 'SlpCode = marca',
    sub1: [
      {
        desc: 'ItemCode =  articulo',
        sub2: [
          {
            desc: ' CategoriaCode = categoria',
            sub3: [
              {
                desc: 'SlpCode = vendedor',
                sub4: [{
                  desc: 'CardCode = cliente',
                  sub5: [
                    {
                      desc: 'DocNum = #pedido',
                    }
                  ]
                }
                ]
              }
            ]
          }
        ]
      }

    ]
  }

    , {
    desc: 'SlpCode = marca',
    sub1: [
      {
        desc: 'ItemCode =  articulo',
        sub2: [
          {
            desc: ' CategoriaCode = categoria',
            sub3: [
              {
                desc: 'SlpCode = vendedor',
                sub4: [{
                  desc: 'CardCode = cliente',
                  sub5: [
                    {
                      desc: 'DocNum = #pedido',
                    }
                  ]
                }
                ]
              }
            ]
          }
        ]
      }

    ]
  }
  ]

  // SlpCode = vendedor, 
  // CardCode = cliente, 
  // DocNum = nuemero del pedido, 
  // ItemCode = articulo, 
  // FirmCode = marca, 
  // CategoriaCode = categoria


  selectItem(item: any) {

    if (this.tempfilters.indexOf(item) === -1) {
      this.tempfilters.push(item);
    } else {
      this.removeItem(item);
    }

    // for (let index = 0; index < this.tempfilters.length; index++) {
    //   const element = this.tempfilters[index];
    //   console.log(element);
    //   if (this.tempfilters[0].name === 'Marca') {
    //   }
    //   if (this.tempfilters[index].name === 'Articulo') {

    //   }
    //   if (this.tempfilters[index].name === 'Categoria') {

    //   }

    // }


    // for (let index = 0; index < this.items.length; index++) {
    //   const element = this.items[index];
    //   console.log(element.SlpCode);
    //   console.log(element.CardCode);
    //   console.log(element.DocNum);
    //   console.log(element.ItemCode);
    //   console.log(element.FirmCode);
    //   console.log(element.CategoriaCode);
    // }

    for (let index = 0; index < this.tst.length; index++) {


      console.log(this.tst[index].desc);


      for (let index1 = 0; index1 < this.tst[index].sub1.length; index1++) {
        console.log(this.tst[index].sub1[index1].desc);

        for (let index2 = 0; index2 < this.tst[index].sub1[index1].sub2.length; index2++) {
          console.log(this.tst[index].sub1[index1].sub2[index2].desc);
          for (let index3 = 0; index3 < this.tst[index].sub1[index1].sub2[index2].sub3.length; index3++) {
            console.log(this.tst[index].sub1[index1].sub2[index2].sub3[index3].desc);

            for (let index4 = 0; index4 < this.tst[index].sub1[index1].sub2[index2].sub3[index3].sub4.length; index4++) {
              console.log(this.tst[index].sub1[index1].sub2[index2].sub3[index3].sub4[index4].desc);

              for (let index5 = 0; index5 < this.tst[index].sub1[index1].sub2[index2].sub3[index3].sub4[index4].sub5.length; index5++) {
                console.log(this.tst[index].sub1[index1].sub2[index2].sub3[index3].sub4[index4].sub5[index5].desc);

              }
            }
          }

        }
      }

    }
  }

  removeItem(item: any) {
    this.tempfilters = this.tempfilters.filter((sub: any) => sub !== item);
  }


}
