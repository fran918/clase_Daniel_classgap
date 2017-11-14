import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  providers:[AutorService,BookService]
})
export class BookCreateComponent implements OnInit {

  book = {nombre:null,asignatura:null};
  autores:any=[];
  constructor(private autorService: AutorService, private bookService: BookService, private router: Router) { }
 
  ngOnInit() {this.getAutorList();
  }

  getAutorList() {
    this.autorService.getAllAutor().then((res) => {
      this.autores = res;
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
  saveBook() {
    this.bookService.saveBook(this.book).then((result) => {
      console.log(result);
      let id = result['_id'];
      this.router.navigate(['/book-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}
