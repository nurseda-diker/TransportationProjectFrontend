import { CompanyDetail } from 'src/app/models/companyDetail';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  companyDetails: CompanyDetail[] = [];
  dataLoaded = false;
  constructor(private companyService: CompanyService) {}
  ngOnInit(): void {
    this.getCompanyDetails();
  }

  getCompanyDetails() {
    this.companyService.getCompanyDetails().subscribe((response) => {
      this.companyDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getStarRating(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    const starArray = [];
    
    for (let i = 0; i < fullStars; i++) {
      starArray.push(1); // 1: Dolu yıldız
    }
    
    if (halfStar === 1) {
      starArray.push(0.5); // 0.5: Yarım yıldız
    }
    
    for (let i = 0; i < emptyStars; i++) {
      starArray.push(0); // 0: Boş yıldız
    }
    
    return starArray;
  }
  

  
    
}
