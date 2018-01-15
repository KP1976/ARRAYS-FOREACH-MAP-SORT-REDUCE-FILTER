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
        return true;
      }
    });

    // Filtrowanie tablicy firmy, która rozpoczęła działalność od 1980 roku
    const lata80 = tab.firmy.filter(firma => {
      if(firma.rok_zalozenia >= 1980 && firma.rok_zalozenia < 1990) {
        const row = document.createElement('p');
  
        row.innerHTML = `
          Nazwa firmy:<strong> ${firma.nazwa}</strong>&emsp;Kategoria:<strong>${firma.rok_zalozenia}</strong>
        `;
        tab.filterDivs[1].appendChild(row); 
        return true;
      }
    });

    // Filtrowanie tablicy lata - wypisuje elementy tablicy równe lub większe niż 18
    const czyJestDorosly = tab.lata.filter(rok => {
      if(rok >= 18) {
        const row = document.createElement('span');
  
        row.innerHTML = `${rok} `;
        tab.filterDivs[2].appendChild(row); 
        return true;
      }
    });
  }

  function Mapping(tab) {
    const czyJestDorosly = tab.lata.map(rok => {
      
      // console.log(rok);
    });
  }

  function Sorting(tab) {
    
  }
  function Reducing(tab) {

  }

  function init(config) {
    addRows(config);
    ForEach(config);
    Filtering(config);
    Mapping(config);
    Sorting(config);
    Reducing(config);
  }

  return {
    init
  };
})();