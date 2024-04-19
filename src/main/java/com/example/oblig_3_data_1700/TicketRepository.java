package com.example.oblig_3_data_1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepository {
    @Autowired
    private JdbcTemplate db;

    public void saveTicket(Ticket ticket){
        String sql = "INSERT INTO Ticket(Filmselector, amount, firstName, surName, telephoneNR, email) VALUES (?, ?, ?, ?, ?, ?);";
        db.update(sql, ticket.getFilmselector(), ticket.getAmount(), ticket.getFirstName(), ticket.getSurName(), ticket.getTelephoneNR(), ticket.getEmail());
    }

    public List<Ticket> hentAlle(){
        String sql = "SELECT * FROM Ticket";
        List<Ticket> ticketListList = db.query(sql, new BeanPropertyRowMapper(Ticket.class));
        return ticketListList;
    }


    public void slettAlle(){
        String sql = "DELETE FROM Ticket;";
        db.update(sql);
    }

    public void slettEn(int id){
        String sql = "DELETE FROM Ticket WHERE id=?;";
        db.update(sql, id);
    }
}

