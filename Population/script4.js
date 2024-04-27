var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", "true");
request.send();
request.onload = function () {
  var countryData = JSON.parse(this.response);
  const LessThan2Lakh = countryData.filter(
    (country) => country.population < 200000
  );
  console.log(
    "population less than 2 lakhs:",
    LessThan2Lakh
  );
};