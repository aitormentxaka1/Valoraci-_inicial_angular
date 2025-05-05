import { Component, OnInit } from '@angular/core';
import { ParametroService } from '../../servicios/parametros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Param } from '../../interfaces/param';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  parametro: Param = { nombre: '', descripcion: '', estado: '' };
  esEdicion = false;

  constructor(
    private servicio: ParametroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.servicio.getParametro(id).subscribe((p) => (this.parametro = p));
    }
  }

  guardar() {
    const callback = () => this.router.navigate(['/parametros']);
    if (this.esEdicion) {
      this.servicio.updateParametro(this.parametro.id!, this.parametro).subscribe(callback);
    } else {
      this.servicio.addParametro(this.parametro).subscribe(callback);
    }
  }
}
