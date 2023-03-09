function loadExcel() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    excelToArray(file)
      .then((array) => {
        console.log(array);
        buildTable(array);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function excelToArray(file) {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    return new Promise((resolve, reject) => {
      reader.onload = function (event) {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const sheetObject = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        const array = sheetObject.slice(1).map((row) =>
          row.reduce((result, cell, i) => {
            const key = sheetObject[0][i];
            result[key] = cell;
            return result;
          }, {})
        );
        resolve(array);
      };
      reader.onerror = function (event) {
        reject(event);
      };
    });
  }


  function contarCargasMayoresA(cargaMinima) {
    let contador = 0;
    miArray.forEach((objeto) => {
      if (objeto.carga > cargaMinima) {
        contador++;
      }
    });
    return contador;
  }

  function calculateStats(array) {
    const loadedItems = array.filter((item) => item.carga > 0);
    return loadedItems.length;
  }
  
  function buildTable(array) {
    // Código para crear la tabla
    
    const table = document.getElementById('table');
    const headers = Object.keys(array[0]);
    const headerRow = headers.map((header) => `<th>${header}</th>`).join('');
    const rows = array.map(
      (row) =>
        `<tr>${headers
          .map((header) => `<td>${row[header]}</td>`)
          .join('')}</tr>`
    );
    table.innerHTML = `<thead><tr>${headerRow}</tr></thead><tbody>${rows.join(
      ''
    )}</tbody>`;
  
    // Calcular estadísticas y mostrar resultado
    const statsSection = document.getElementById("stats-section");
    const stats = calculateStats(array);
    const statsText = `Hay ${stats} PSR compradores.`;
    statsSection.innerHTML = `<h2>Estadísticas</h2><p>${statsText}</p>`;
  }

  function toggleTable() {
    const table = document.getElementById("table");
    if (table.style.display === "none") {
      table.style.display = "block";
    } else {
      table.style.display = "none";
    }
  }
  
  
  
  

