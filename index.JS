"use strict";
debugger;

function twoDimensionalArray() {
  const rows = +prompt(`Enter rows`);
  const columns = +prompt(`Enter columns`);
  if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
    alert(`It's not correct. Please try again.`);
    return;
  }

  const arr = [];

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < columns; j++) {
      const element = prompt(`Row ${i + 1}, Column ${j + 1}`);
      row.push(element);
    }

    arr.push(row);
  }

  let output = '';

  for (let i = 0; i < rows; i++) {
    output += `Row ${i + 1}: ${arr[i].join(', ')}\n`;
  }

  alert(output);
}

twoDimensionalArray();
