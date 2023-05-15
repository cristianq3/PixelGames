const search = (evt) => {
  // console.log(evt);
  // evt.preventDefault();
  const value = document.getElementById("search").value;
  console.log(value);
  const result = peliculas.filter((item) =>
    item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
  console.log(result, "soy el resu");
  return result;
};