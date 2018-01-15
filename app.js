const Tablica = (function() {
  function addRows(tab) {
     tab.firmy.forEach(firma => {
      const row = document.createElement('tr');
      
      row.className = 'table-row';
      row.innerHTML = `
        <th>${firma.nazwa}</th>
        <th>${firma.kategoria}</th>
        <th>${firma.rok_zalozenia}</th>
        <th>${firma.koniec_dzialalnosci}</th>
      `;
      tab.tableBody.appendChild(row);    
    });

    tab.tableYears.innerHTML = `<strong>Lata:</strong> ${tab.lata}`;    
  }

  function ForEach(tab) {
    tab.firmy.forEach((firma, index) => {
      const row = document.createElement('p');

      row.innerHTML = `Indeks w tablicy: <strong>${index}</strong>&emsp;Nazwa firmy: <strong>${firma.nazwa}</strong>`;
      tab.funForEach.appendChild(row); 
    });
  }

  function Filtering(tab) {
    // Filtrowanie tablicy firmy gdzie kategoria jest Finanse
    const firmyFinansowe = tab.firmy.filter(firma => {
      if(firma.kategoria === 'Finanse') {
        const row = document.createElement('p');
  
        row.innerHTML = `
          Nazwa firmy:<strong> ${firma.nazwa}</strong>&emsp;Kategoria:<strong>${firma.kategoria}</strong>
        `;
        tab.filterDivs[0].appendChild(row); 

        // return true;
      }
    });

    // Filtrowanie tablicy firmy, gdzie firma rozpoczęła działalność od 1980 rok
    const lata80 = tab.firmy.filter(firma => {
      if(firma.rok_zalozenia >= 1980 && firma.rok_zalozenia < 1990) {
        const row = document.createElement('p');
  
        row.innerHTML = `
          Nazwa firmy:<strong> ${firma.nazwa}</strong>&emsp;Kategoria:<strong>${firma.rok_zalozenia}</strong>
        `;
        tab.filterDivs[1].appendChild(row); 

        // return true;
      }
    });

    // Filtrowanie tablicy lata - wypisuje elementy tablicy równe lub większe niż 18
    const czyJestDorosly = tab.lata.filter(rok => {
      if(rok >= 18) {
        const row = document.createElement('span');
  
        row.innerHTML = `${rok} `;
        tab.filterDivs[2].appendChild(row); 

        // return true;
      }
    });

    const lastedTenYears = tab.firmy.filter((firma, index) => {
      if((firma.koniec_dzialalnosci - firma.rok_zalozenia) >= 10) {
        const row = document.createElement('p');
  
        row.innerHTML = `
        Indeks w tablicy: <strong>${index}</strong>&emsp;Nazwa firmy:<strong> ${firma.nazwa}</strong>
        &emsp;Ile lat: <strong>${firma.koniec_dzialalnosci - firma.rok_zalozenia}</strong>`;
        tab.filterDivs[3].appendChild(row); 

        // return true;
      }
    });
  }

  function Mapping(tab) {
    // Tworzenie tablicy z indeksem i nazwami firm wraz z latami działalności
    const nazwyFirm = tab.firmy.map((firma, index) => {
      const row = document.createElement('p');
  
      row.innerHTML = `
      Indeks: <strong>${index}</strong>&emsp;Nazwa firmy:<strong> ${firma.nazwa}</strong>
      &emsp;Lata działalności:<strong> [${firma.rok_zalozenia} – ${firma.koniec_dzialalnosci}]</strong>`;
      tab.funMapDivs[0].appendChild(row);

      // return firma.nazwa;
    });

    // Podniesienie do kwadratu elementów tablicy lata
    const row = document.createElement('p');
    const agesSquare = tab.lata.map(rok => rok * 2); 
    
    tab.funMapDivs[1].appendChild(row);
    row.textContent = agesSquare;
  }

  function Sorting(tab) {
    // Sortowanie tablicy firmy od tej, która powstała najwcześniej
    const posortowaneFirmy = tab.firmy.sort((firma1, firma2) =>
      (firma1.rok_zalozenia > firma2.rok_zalozenia ? 1 : -1))
    .forEach(firma => {
      const row = document.createElement('p');

      row.innerHTML = `Nazwa firmy: <strong>${firma.nazwa}</strong>&emsp;Rok założenia: <strong>${firma.rok_zalozenia}</strong>`;
      tab.funSortDivs[0].appendChild(row);
    });

    // Sortowanie tablicy lata
    const row = document.createElement('p');
    const posortowaneLata = tab.lata.sort((a, b) => a - b);  // a - b sortowanie rosnąco, b - a sortowanie malejąco

    tab.funSortDivs[1].appendChild(row);
    row.textContent = posortowaneLata;
  }

  function Reducing(tab) {
    // Suma wszystkich elementów tablicy lata
    const row = document.createElement('p');
    const sumaLat = tab.lata.reduce((suma, rok) => suma + rok, 0); // drugi parametr jest dodawany do sumy
    tab.funReduceDivs[0].appendChild(row);
    row.textContent = sumaLat;

    // Suma wszystkich lat ze wszystkich firm z tablicy firmy
    const wszystkieLata = tab.firmy.reduce((suma, firma) => 
    suma + (firma.koniec_dzialalnosci - firma.rok_zalozenia), 0);
    
    const row2 = document.createElement('p');
    tab.funReduceDivs[1].appendChild(row2);
    row2.textContent = wszystkieLata;
  }

  function Combine(tab) {
    // Na tablicy lata, elementy mnożone przez 2, filtrowane tylko te powyżej lub równe 40, posortowane rosnąco i zsumowane
    const row = document.createElement('p');
    const kombinacja = tab.lata
    .map(rok => rok * 2)
    .filter(rok => rok >= 40)
    .sort((a, b) => a - b)
    .reduce((suma, rok) => suma + rok, 0);
    
    tab.funCombine.appendChild(row);
    row.textContent = kombinacja;
  }

  function init(config) {
    addRows(config);
    ForEach(config);
    Filtering(config);
    Mapping(config);
    Sorting(config);
    Reducing(config);
    Combine(config);
  }

  return {
    init
  };
})();