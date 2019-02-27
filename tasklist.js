
	$(function() {

   var people = [];

   $.getJSON('https://jsonplaceholder.typicode.com/todos', function(data) {
       $.each(data, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.userId + "</td>" +
           "<td>" + f.id + "</td>" + "<td>" + f.title + "</td>" + "<td>" + f.completed + "</td>" + "</tr>"
           $(tblRow).appendTo("#myTable tbody");
     });

   });

});

// 	window.onload = function() {

// 	var myTable = document.getElementById('myTable');

//     myTable.onclick = function(e) {
//       if (e.target.tagName != 'TH') return;

//       // Если TH -- сортируем
//       sortmyTable(e.target.cellIndex, e.target.getAttribute('data-type'));
//     };

//     function sortmyTable(colNum, type) {
//       var tbody = myTable.getElementsByTagName('tbody')[0];

//       // Составить массив из TR
//       var rowsArray = [].slice.call(tbody.rows);

//       // определить функцию сравнения, в зависимости от типа
//       var compare;

//       switch (type) {
//         case 'paragraph':
//           compare = function(rowA, rowB) {
//             return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
//           };
//           break;
//         case 'number':
//           compare = function(rowA, rowB) {
//             return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
//           };
//           break;
//           case 'Title':
//           compare = function(rowA, rowB) {
//             return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
//           };
//           break;
//           case 'Text':
//           compare = function(rowA, rowB) {
//             return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
//           };
//           break;
//       }
      


//       // сортировать
//       rowsArray.sort(compare);

//       // Убрать tbody из большого DOM документа для лучшей производительности
//       // но не отработает сортировка
//       // grid.removeChild(tbody);

//       // добавить результат в нужном порядке в TBODY
//       // они автоматически будут убраны со старых мест и вставлены в правильном порядке
//       for (var i = 0; i < rowsArray.length; i++) {
//         tbody.appendChild(rowsArray[i]);
//       }

//       grid.appendChild(tbody);

//     }
// };