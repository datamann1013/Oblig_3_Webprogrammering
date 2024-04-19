package com.example.oblig_3_data_1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class BasicController {

    @Autowired
    TicketRepository rep;

    @PostMapping("/lagre")
    public void lagreKunde(Ticket ticket){rep.saveTicket(ticket);}

    @GetMapping("/hentAlle")
    public List<Ticket> hentAlle(){
        return rep.hentAlle();
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        rep.slettAlle();
    }

}
