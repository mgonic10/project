import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing , appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ContentComponent } from './components/shared/content/content.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SettingComponent } from './components/shared/setting/setting.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ProductoComponent } from './components/producto/producto.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ComprasComponent } from './components/reportes/compras/compras.component';
import { ProductosComponent } from './components/reportes/productos/productos.component';
import { ProductosalmacenComponent } from './components/reportes/productosalmacen/productosalmacen.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { OrdencompraComponent } from './components/ordencompra/ordencompra/ordencompra.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SettingComponent,
    ProveedorComponent,
    ProductoComponent,
    EmpresaComponent,
    UsuarioComponent,
    ComprasComponent,
    ProductosComponent,
    ProductosalmacenComponent,
    MovimientosComponent,
    OrdencompraComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
