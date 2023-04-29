function search() {
  const searchItem = document.getElementById("search-item").value.toUpperCase();
  const productList = document.getElementById("product-list");
  const products = productList.querySelectorAll(".product");

  for(let i = 0; i < products.length; ++i) {
    let match = products[i].getElementsByTagName("h2")[0];
    if(match) {
      let textValue = match.textContent || match.innerHTML;
      if(textValue.toUpperCase().indexOf(searchItem) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
  }
}