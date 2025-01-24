const form = document.getElementById("form");

form.addEventListener('submit', function(event){
    event.preventDefault()
    
})


function handleSubmit() {
    var name = document.getElementById("name").value;
    var rating = document.getElementById("rating").value;
    alert(name + " rated the website " + rating);
}