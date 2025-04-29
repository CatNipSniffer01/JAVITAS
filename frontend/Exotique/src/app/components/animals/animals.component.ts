import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animals',
  standalone: false,
  templateUrl: './animals.component.html',
  styleUrl: './animals.component.css'
})
export class AnimalsComponent implements OnInit {
  animals: any[] = [];
  
  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.getAllAnimals().subscribe((data: any) => {
      this.animals = data;
    });
  }
}
