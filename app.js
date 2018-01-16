const Vars = (function() {
  function addparagraphs(vars) {
     vars.users.forEach(user => {
      const paragraph = document.createElement('tr');
      
      paragraph.className = 'table-paragraph';
      paragraph.innerHTML = `
        <th>${user.name}</th>
				<th>${user.age}</th>
        <th>${user.category}</th>
        <th>${user.start}</th>
        <th>${user.end}</th>
      `;
      vars.tableBody.appendChild(paragraph);    
    });

    vars.tableYears.innerHTML = `<strong>Liczby:</strong> ${vars.numbers}`;    
  }

  function ForEach(vars) {
    vars.users.forEach((user, index) => {
      const paragraph = document.createElement('p');

      paragraph.innerHTML = `Indeks: <strong>${index}</strong>&emsp;Imię: <strong>${user.name}</strong>`;
      vars.funForEach.appendChild(paragraph); 
    });
  }

  function Filtering(vars) {
    // Filtparagraphanie tablicy users gdzie kategoria to Finanse
    const financialUsers = vars.users.filter(user => {
      if(user.category === 'Finanse') {
        const paragraph = document.createElement('p');
  
        paragraph.innerHTML = `
          Imię:<strong> ${user.name}</strong>&emsp;Kategoria:<strong> ${user.category}</strong>
        `;
        vars.filterDivs[0].appendChild(paragraph); 
      }
    });

    // Filtparagraphanie tablicy users, gdzie użytkownik  pracował w latach 80-tych
    const eighties = vars.users.filter(user => {
      if(user.start >= 1980 && user.end < 1990) {
        const paragraph = document.createElement('p');
  
        paragraph.innerHTML = `
        Imię:<strong> ${user.name}</strong>&emsp;Początek pracy:<strong> ${user.start}</strong>&emsp;Koniec pracy:<strong> ${user.end}</strong>`;
        vars.filterDivs[1].appendChild(paragraph); 
      }
    });

    // Filtparagraphanie tablicy numbers – wypisuje elementy tablicy równe lub większe niż 18
    const overEighteen = vars.numbers.filter(num => {
      if(num >= 18) {
        const span = document.createElement('span');
  
        span.innerHTML = `${num} `;
        vars.filterDivs[2].appendChild(span); 
      }
    });

		// Filtparagraphanie tablicy users, gdzie użytkownik pracował dłużej niż 10 lat
    const lastedTenYears = vars.users.filter((user, index) => {
      if((user.end - user.start) >= 10) {
        const paragraph = document.createElement('p');
				
        paragraph.innerHTML = `
        Indeks: <strong>${index}</strong>&emsp;Imię: <strong> ${user.name}</strong>
        &emsp;Ile lat: <strong>${user.end - user.start}</strong>`;
        vars.filterDivs[3].appendChild(paragraph); 
      }
    });
  }

  function Mapping(vars) {
    // Tworzenie tablicy z indeksem i imieniem użytkownika wraz z latami działalności
    const userNames = vars.users.map((user, index) => {
      const paragraph = document.createElement('p');
  
      paragraph.innerHTML = `
      Indeks: <strong>${index}</strong>&emsp;Imię<strong> ${user.name}</strong>
      &emsp;Lata działalności: <strong> [${user.start} – ${user.end}]</strong>`;
      vars.funMapDivs[0].appendChild(paragraph);
    });

    // Mnożenie elementów tablicy numbers razy 2
    const paragraph = document.createElement('p');
    const agesSquare = vars.numbers.map(num => num * 2); 
    
    vars.funMapDivs[1].appendChild(paragraph);
    paragraph.textContent = agesSquare;
  }

  function Sorting(vars) {
    // Sortowanie tablicy users według rozpoczęcia działalności
    const sortedUsers = vars.users.sort((user1, user2) =>
      (user1.start > user2.start ? 1 : -1))
			.forEach(user => {
      const paragraph = document.createElement('p');

      paragraph.innerHTML = `Imię: <strong>${user.name}</strong>&emsp;Rok założenia: <strong>${user.start}</strong>`;
      vars.funSortDivs[0].appendChild(paragraph);
    });

    // Sortowanie tablicy numbers
    const paragraph = document.createElement('p');
    const sortedNumbers = vars.numbers.sort((a, b) => a - b);  // a - b sortowanie rosnąco, b - a sortowanie malejąco

    vars.funSortDivs[1].appendChild(paragraph);
    paragraph.textContent = sortedNumbers;
  }

  function Reducing(vars) {
    // Suma wszystkich elementów tablicy numbers
    const paragraph = document.createElement('p');
    const sumOfNumbers = vars.numbers.reduce((sum, num) => sum + num, 0); // drugi parametr jest dodawany do sumy
    vars.funReduceDivs[0].appendChild(paragraph);
    paragraph.textContent = sumOfNumbers;

    // Suma wszystkich lat przepracowanych przez wszystkich użytkowników z tablicy users
    const allYears = vars.users.reduce((sum, user) => 
    sum + (user.end - user.start), 0);
    
    const paragraph2 = document.createElement('p');
    vars.funReduceDivs[1].appendChild(paragraph2);
    paragraph2.textContent = allYears;
  }

  function Combine(vars) {
    // Na tablicy numbers, elementy mnożone przez 2, filtrowane tylko te powyżej lub równe 40, posortowane rosnąco i zsumowane
    const paragraph = document.createElement('p');
    const combine = vars.numbers
    .map(num => num * 2)
    .filter(num => num >= 40)
    .sort((a, b) => a - b)
    .reduce((sum, num) => sum + num, 0);
    
    vars.funCombine.appendChild(paragraph);
    paragraph.textContent = combine;
  }

  function init(vars) {
    addparagraphs(vars);
    ForEach(vars);
    Filtering(vars);
    Mapping(vars);
    Sorting(vars);
    Reducing(vars);
    Combine(vars);
  }

  return {
    init
  };
})();