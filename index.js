// window -> refers to the browser's window.
// window.location.href = 'https://guvi.in';

// console.log(window.document); // refers to the html document

// read or access html elements in javascript

let listItems = window.document.getElementsByTagName('ul')[0].children;

// for (let i = 0; i < listItems.length; i++) {
//     console.log(listItems[i].textContent);
// }

for (let i = 0; i < listItems.length; i++) {
    listItems[i].textContent = 'Coffee';
}