import { Component, OnInit } from '@angular/core';
import { ParametroService } from '../../servicios/parametros.service';
import { Router } from '@angular/router';
import { Param } from '../../interfaces/param';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  parametros: Param[] = [];

  constructor(private servicio: ParametroService, public router: Router) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.servicio.getParametros().subscribe({
      next: (datos) => (this.parametros = datos),
      error: (e) => console.error('Error al cargar los datos:', e),
    });
  }

  eliminar(id: string) {
    this.servicio.deleteParametro(id).subscribe(() => this.cargar());
  }

  ver(id: string) {
    this.router.navigate(['/detalle', id]);
  }

  editar(id: string) {
    this.router.navigate(['/editar', id]);
  }

  descargar() {
    this.servicio.descargarJSON().subscribe((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'param.json';
      link.click();
    });
  }
}
