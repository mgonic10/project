import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment/moment';
import 'moment/min/locales';
@Component({
  selector: 'app-ordencompra',
  templateUrl: './ordencompra.component.html',
  styleUrls: ['./ordencompra.component.css']
})
export class OrdencompraComponent implements OnInit {

  serie_orden:string;
  numero_orden:string;  
  JML_fechaemision_emisor: moment.Moment;
  JML_nombre_emisor: string;
  JML_ruc_emisor: number;
  JML_direccion_emisor: string;
  JML_telefono_emisor: string;
  JML_anexo_emisor: string;
  JML_CIIU_emisor: string;
  JML_solicita_emisor: string;
  constructor() { }

  ngOnInit() {
    this.serie_orden="001";
    this.numero_orden="00000000001"; 
    this.JML_fechaemision_emisor = moment(new Date(), 'DDDD dd MMMM YYYY');
    this.JML_nombre_emisor = 'JMI Empresa S.A.C.';
    this.JML_ruc_emisor = 20408995189;
    this.JML_direccion_emisor = 'Dirección de la empresa solicitante';
    this.JML_telefono_emisor = '013812078';
    this.JML_anexo_emisor = '003';
    this.JML_CIIU_emisor = '-';
    this.JML_solicita_emisor = 'Usuario, Luis Albarracin';

    // let lists = document.querySelectorAll<HTMLElement>("#tbody_tbl_detalle_productos tr");
    // lists.forEach((x) => {
    //   $(x).children("td").eq(4).children("input");
    // });
  }

  AddRowTableDetailProducts() {
    debugger;
    
    let tbodyDetailProducts = $("#tbody_tbl_detalle_productos");
    let trDetailProducts = $("#tbody_tbl_detalle_productos > tr");
    let count = trDetailProducts.length+1;
    tbodyDetailProducts.append(`<tr data-id='${count}'>
                                  <td class="text-center">
                                      <div class="input-group-btn">
                                          <button type="button" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button>
                                      </div>
                                  </td>
                                  <td><input type="number" class="form-control text-center" value="1"></td>
                                  <td><select class="form-control"><option value=''>PRODUCTO FICTICIO</option></select></td>
                                  <td><select class="form-control"><option value=''>UND</option></select></td>
                                  <td><input type="number" step="0.1" class="form-control text-center" value="34.99"></td>
                                  <td class="text-right precio_grilla" style="font-size: 14pt; font-weight: bolder;">S/. 34.99</td>
                              </tr>`);    
  }

  DeleteRow(index:string) {
    debugger;
    $("#tbody_tbl_detalle_productos").children(`tr[data-id="${index}"]`).remove();    
  }
}
