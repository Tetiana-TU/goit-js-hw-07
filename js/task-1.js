const lielement = document.querySelectorAll('li.item');

console.log('Number of categories:', lielement.length);

lielement.forEach(element => {
  const h2text = element.querySelector('h2').textContent;

  const lilength = element.querySelectorAll('li').length;

  console.log('Category:', h2text);

  console.log('Elements:', lilength);
});
