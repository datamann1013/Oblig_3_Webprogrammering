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
    let check = true;
    console.log($("#filmselector").val());
    if ($("#filmselector").val() === "Velg film her" || $("#filmselector").val() === null){
        $("div#filmerror").text("Velg en film!");
        check = false;
    }
    else {
        $("div#filmerror").text("");
    }
    if ($("#amount").val() === ""){
        $("div#amounterror").text("Velg et antall biletter!");
        check = false;
    }
    else {
        $("div#amounterror").text("");
    }
    if ($("#firstName").val() === ""){
        $("div#firstError").text("Skriv inn et fornavn!");
        check = false;
    }
    else {
        $("div#firstError").text("");
    }
    if ($("#surName").val() === ""){
        $("div#surError").text("Skriv inn et etternavn!");
        check = false;
    }
    else {
        $("div#surError").text("");
    }

    if($("#telephoneNR").val().length !== 8) {
        $("div#phoneError").text("Telefonnummeret må ha 8 siffer!");
        check = false;
    }
    else {
        $("div#phoneError").text("");
    }

    if ($("#email").val().indexOf(".") === -1 || $("#email").val() === "" || $("#email").val().indexOf("@") === -1){
        if($("#email").val().indexOf(".") === -1) {
            $("div#emailError").text("Eposten må ha punktum!");
            check = false;
        }
        if($("#email").val().indexOf("@") === -1) {
            $("div#emailError").text("Eposten må ha @!");
            check = false;
        }
        if  ($("#email").val() === "") {
            $("div#emailError").text("Skriv inn en epost!");
        }
    }
    else {
        $("div#emailError").text("");
    }

    return check;

}