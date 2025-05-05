import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParametroService } from '../../servicios/parametros.service';
import { Param } from '../../interfaces/param';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})

export class DetallesComponent implements OnInit {
  parametro?: Param;

  constructor(
    private route: ActivatedRoute,
    private servicio: ParametroService
  ) {}

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.servicio.getParametro(id).subscribe((data) => (this.parametro = data));
  }
}
