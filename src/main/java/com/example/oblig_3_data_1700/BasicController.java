package com.example.oblig_3_data_1700;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class BasicController {

    public static List<Ticket> tickList = new ArrayList<>();
    @PostMapping("/lagre")
    public void saveTicket(Ticket ticket){
        tickList.add(ticket);
        System.out.println("Ticket: " + String. valueOf(ticket));
    }

    @GetMapping("/hentAlle")
    public List<Ticket> hentAlle(){
        return tickList;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        tickList.clear();
    }

}
