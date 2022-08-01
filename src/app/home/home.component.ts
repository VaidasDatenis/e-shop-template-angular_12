import { Component, OnInit } from '@angular/core';

import { ContractService } from '../services/contract.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private contractService: ContractService) { }
  ngOnInit(): void {
    this.contractService.loadWeb3();
    // if (typeof window.ethereum !== "undefined") {
    //   window.ethereum.request({method: "eth_requestAccounts"})
    // } else {
    //   console.log("No MetaMask!")
    // }
  }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
}
