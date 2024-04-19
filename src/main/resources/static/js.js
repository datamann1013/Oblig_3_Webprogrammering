function regTicket() {
    if (checkValues() == true) {
         const ticket = {
             filmselector : $("#filmselector").val(),
             amount : $("#amount").val(),
             firstName : $("#firstName").val(),
             surName : $("#surName").val(),
             telephoneNR : $("#telephoneNR").val(),
             email : $("#email").val(),
         };
         $.post("/lagre", ticket, function(){
             hentAlle();
         });
         $("#filmselector").val("");
         $("#amount").val("");
         $("#firstName").val("");
         $("#surName").val("");
         $("#telephoneNR").val("");
         $("#email").val("");
     }

}
function hentAlle() {
    $.get( "/hentAlle", function(tickets) {
        formaterData(tickets);
    });
}
function formaterData(data) {
    let ut = "<table><tr><th>Film</th><th>Antall</th><th>Firstname</th>" +
        "<th>Surname</th><th>Phonenumber</th><th>Email</th></tr>";
    for (const enhet of data) {
        ut += "<tr><td>" + enhet.filmselector + "</td><td>" + enhet.amount + "</td><td>" + enhet.firstName + "</td>" +
            "<td>" + enhet.surName + "</td><td>" + enhet.telephoneNR + "</td><td>" + enhet.email + "</td></tr>";
    }
    ut += "</table>";
    $("#output").html(ut);
}
function delTickets() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}
function checkValues(){
    if($("#firstName").val() == "" || $("#surName").val() == "" || $("#telephoneNR").val() == "" || $("#email").val() == "") {
        alert("Fyll ut alle feltene!");
        return false;
    }
    if($("#telephoneNR").val().length != 8) {
        alert("Telefonnummeret må ha 8 siffer!");
        return false;
    }
    if($("#email").val().indexOf("@") == -1) {
        alert("Eposten må ha @!");
        return false;
    }
    if($("#email").val().indexOf(".") == -1) {
        alert("Eposten må ha punktum!");
        return false;
    }
    else {
        return true;
    }

}