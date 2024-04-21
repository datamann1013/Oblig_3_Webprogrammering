package com.example.oblig_3_data_1700;

public class Ticket {

    private String filmselector;
    private Integer amount;
    private String firstName;
    private String surName;
    private String telephoneNR;
    private String email;

    public Ticket(String filmselector, Integer amount, String firstName, String surName, String telephoneNR, String email) {
        this.filmselector = filmselector;
        this.amount = amount;
        this.firstName = firstName;
        this.surName = surName;
        this.telephoneNR = telephoneNR;
        this.email = email;
    }
    public Ticket (){

    }

    @Override
    public String toString() {
        return filmselector + " " + amount + " " + firstName + " " + surName + " " + telephoneNR + " " + email;
    }

    public String getFilmselector() {
        return filmselector;
    }

    public void setFilmselector(String filmselector) {
        this.filmselector = filmselector;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public String getTelephoneNR() {
        return telephoneNR;
    }

    public void setTelephoneNR(String telephoneNR) {
        this.telephoneNR = telephoneNR;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
