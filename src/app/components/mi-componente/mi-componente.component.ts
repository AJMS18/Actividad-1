import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'mi-componente',
    template: `
    
    <h1>Vivero el Otoño </h1>
    <img src="https://i.ibb.co/56vN7nG/Pinos-Imagen.png">
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre Común</th>
            <th scope="col">Tipo</th>
            <th scope="col">Clima</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let planta of plantas">
            <td>{{planta.numero}}</td>
            <td>{{planta.NombreComun}}</td>
            <td>{{planta.Tipo}}</td>
            <td>{{planta.Clima}}</td>
        </tr>
        </tbody>
    </table>
    <p>Total de Plantas de Interior: <span id="contadorInterior"></span></p>
    <p>Total de Plantas de Exterior: <span id="contadorExterior"></span></p>
    `
})

export class MiComponente implements OnInit {
    constructor(private http: HttpClient) {
        console.log("componente mi componente cragado");
    }
    plantas: any;

    ngOnInit(){
        this.http.get('https://raw.githubusercontent.com/AJMS18/Actividad-1/main/Plantas.json')
        .subscribe(data => {
            this.plantas = data;
            let contadorInterior = document.getElementById('contadorInterior');
            let contadorExterior = document.getElementById('contadorExterior');
            let interior = 0;
            let exterior = 0;
    
            for(let i= 0; i<this.plantas.length; i++){
                if(this.plantas[i].Tipo == 'Interior'){
                    interior++;
                } else {
                    exterior++;
                }
            }
            if (contadorInterior != null) {
                contadorInterior.innerHTML = interior.toString();
            }
            if (contadorExterior != null) {
                contadorExterior.innerHTML = exterior.toString();
            }
        });
        
    }
}