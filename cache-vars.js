document.addEventListener('DOMContentLoaded', function(){
  Vars.init({
    users: [
      {name: 'Andrzej', age: 33, category: 'Finanse', start: 1981, end: 2003},
      {name: 'Roman', age: 23, category: 'Marketing', start: 1992, end: 2008},
      {name: 'Krzysztof', age: 42, category: 'Budownictwo', start: 1999, end: 2007},
      {name: 'Zbigniew', age: 33, category: 'Sztuka', start: 1989, end: 2010},
      {name: 'Kamil', age: 25, category: 'IT', start: 2009, end: 2014},
      {name: 'Lucjan', age: 50, category: 'Technologia', start: 1987, end: 2010},
      {name: 'Agata', age: 19, category: 'Technologia', start: 1986, end: 1996},
      {name: 'Urszula', age: 25, category: 'Finanse', start: 2011, end: 2016},
      {name: 'Sylwia', age: 29, category: 'Finanse', start: 1981, end: 1989}
    ],
    numbers: [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32],
    tableBody: document.querySelector('.table-body'),
    tableYears: document.querySelector('.years'),
    funForEach: document.querySelector('.foreach'),
    filterDivs: document.querySelectorAll('.filter div:nth-child(odd)'),
    funMapDivs: document.querySelectorAll('.map div:nth-child(odd)'),
    funSortDivs: document.querySelectorAll('.sort div:nth-child(odd)'),
    funReduceDivs: document.querySelectorAll('.reduce div:nth-child(odd)'),
    funCombine: document.querySelector('.combine')
  });
});
