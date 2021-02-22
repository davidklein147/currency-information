import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardHomeService } from 'src/app/services/guard-home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private guardHome: GuardHomeService, private router:Router) { }

  ngOnInit(): void {
  }

  home(): void{
    this.guardHome.permission = true;
    this.router.navigate(['/home'])
  }

}
