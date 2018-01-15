document.addEventListener('DOMContentLoaded', function(){
  Tablica.init({
    firmy: [
      {nazwa: 'Firma nr 1', kategoria: 'Finanse', rok_zalozenia: 1981, koniec_dzialalnosci: 2003},
      {nazwa: 'Firma nr 2', kategoria: 'Marketing', rok_zalozenia: 1992, koniec_dzialalnosci: 2008},
      {nazwa: 'Firma nr 3', kategoria: 'Budownictwo', rok_zalozenia: 1999, koniec_dzialalnosci: 2007},
      {nazwa: 'Firma nr 4', kategoria: 'Sztuka', rok_zalozenia: 1989, koniec_dzialalnosci: 2010},
      {nazwa: 'Firma nr 5', kategoria: 'IT', rok_zalozenia: 2009, koniec_dzialalnosci: 2014},
      {nazwa: 'Firma nr 6', kategoria: 'Technologia', rok_zalozenia: 1987, koniec_dzialalnosci: 2010},
      {nazwa: 'Firma nr 7', kategoria: 'Technologia', rok_zalozenia: 1986, koniec_dzialalnosci: 1996},
      {nazwa: 'Firma nr 8', kategoria: 'Finanse', rok_zalozenia: 2011, koniec_dzialalnosci: 2016},
      {nazwa: 'Firma nr 9', kategoria: 'Finanse', rok_zalozenia: 1981, koniec_dzialalnosci: 1989}
    ],
    lata: [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32],
    tableBody: document.querySelector('.table-body'),
    tableYears: document.querySelector('.years'),
    funForEach: document.querySelector('.foreach'),
    funFilter: document.querySelector('.filter'),
    filterDivs: document.querySelectorAll('.filter div:nth-child(odd)'),
    funMap: document.querySelector('.map'),
    funSort: document.querySelector('.sort'),
    funReduce: document.querySelector('.reduce')
  });
});
