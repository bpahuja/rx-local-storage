# RxStorage

[![GitHub license](https://img.shields.io/github/license/bpahuja/rx-storage)](https://github.com/bpahuja/rx-storage/blob/master/LICENSE) 
[![GitHub stars](https://img.shields.io/github/stars/bpahuja/rx-storage)](https://github.com/bpahuja/rx-storage/stargazers) 
[![GitHub build](https://img.shields.io/badge/build-passing-green)](https://img.shields.io/badge/build-passing-green)

It is a reactive wrapper around Storage Event API of DOM.

## Installation

````
npm install rxjs-storage
````

## Usage

#### Angular Example

````typescript
import { Component, OnInit } from '@angular/core';
import { RxStorage } from 'rxjs-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private storageService: RxStorage) {
  }

  ngOnInit() {
    this.storageService.getObservable('check').subscribe(data => {
      console.log(data);
    })
  }

}
````

The above example sets up a listener on a particular key the storage(localStorage or sessionSrorage).
RxStorage can be used as a Service in Angular.(Add it in providers array in the respective module)

#### OR

RxStorage can simply be used as a class in normal js or ts code to setup a listener on the Storage.

## Contributing

Create a Pull request from a fork of the repository.
