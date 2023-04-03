import { Component, OnInit } from '@angular/core';
import { TechService } from 'src/app/shared/technology/tech.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  constructor(private tech: TechService) {}
  ngOnInit(): void {
    console.log('TechnologyComponent');
    this.tech.getTechs();
  }
}
