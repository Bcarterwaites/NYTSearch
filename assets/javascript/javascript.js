var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "62e9c54a22c14b5789147aad99171347"
})
$("#search").on("click", function(){

var person = $("#searchTerm").val();
console.log(person)


 }     );


$.ajax({
    url: url,
    method: 'GET',
}).then(function (response) {
    console.log(response);


    var records = response.response.meta.hits;
    console.log(records);
   

    var data = response.response.docs;
    console.log(data)
   
});