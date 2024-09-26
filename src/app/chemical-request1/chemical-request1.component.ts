import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { AddDataComponent } from '../add-data/add-data.component';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-chemical-request1',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    DropdownModule,
    TableModule,
    DialogModule,
    AddDataComponent,
  ],
  templateUrl: './chemical-request1.component.html',
  styleUrl: './chemical-request1.component.css',
})
export class ChemicalRequest1Component {
  cities: City[] | undefined;
  visible: boolean = false;
  currentStep: number = 1;

  products = [
    {
      id: 1,
      name: 'Petronas Hydraulic AW 68',
      department: 'MN',
      objective: 'ให้กำลังและบำรุงรักษาเครื่องจักร',
      requester: 'Teerapan Jumrronwat',
      requestingDate: '02/01/2016',
      startingDate: '04/01/2016',
      status: 'Active',
    },
  ];

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  showDialog() {
    this.visible = true;
  }

  nextStep() {
    this.currentStep++;
  }

  close() {
    this.currentStep = 1
    this.visible = false
  }
}
