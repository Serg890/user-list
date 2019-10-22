import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  writeWord: string;
  words: Array<string> = [];
  wordsStr: string;
  wordsArr: Array<string> = [];
  output: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }
  add(): void {
    if (this.writeWord) {
      this.words.push(this.writeWord);
      this.writeWord = '';
    }
  }

  reset(): void {
    this.words = [];
    this.wordsStr = '';
    this.wordsArr = [];

  }

  cenzor(): void {
    if (this.wordsStr) {
      this.wordsArr = this.wordsStr.split(' ');
    }

    this.output = this.wordsArr.map((word) => {
      if (this.words.includes(word)) {
        return '*'.repeat(word.length);
      } else {
        return word;
      }
    });
    this.wordsStr = this.output.join(' ');
  }
}
