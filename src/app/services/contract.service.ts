import { Injectable } from '@angular/core';
import Web3 from "web3";

declare let window:any;

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  web3: any;

  async loadWeb3() {
    if (typeof window.ethereum !== "undefined") {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable;
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        window.alert('Non-Ethereum browser detected. You Should consider using MetaMask!');
    }
  }
}
