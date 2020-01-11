import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ProductoComponent } from './components/producto/producto.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ComprasComponent } from './components/reportes/compras/compras.component';
import { ProductosComponent } from './components/reportes/productos/productos.component';
import { ProductosalmacenComponent } from './components/reportes/productosalmacen/productosalmacen.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { OrdencompraComponent } from './components/ordencompra/ordencompra/ordencompra.component';

const appRoutes: Routes = [
    { path: 'proveedor', component: ProveedorComponent , data:{tittle: 'Proveedor'}},
    { path: 'producto', component: ProductoComponent, data:{tittle: 'Producto'}},
    { path: 'empresa', component: EmpresaComponent, data:{tittle: 'Empresa'}},
    { path: 'usuario', component: UsuarioComponent, data:{tittle: 'Empresa'}},
    { path: 'compras', component: ComprasComponent, data:{tittle: 'Empresa'}},
    { path: 'productos', component: ProductosComponent, data:{tittle: 'Empresa'}},
    { path: 'productosalmacen', component: ProductosalmacenComponent, data:{tittle: 'Empresa'}},
    { path: 'movimientos', component: MovimientosComponent, data:{tittle: 'Empresa'}},
    { path: 'ordencompra', component: OrdencompraComponent, data:{tittle: 'Empresa'}}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =RouterModule.forRoot(appRoutes);

