package br.edu.uni7.vp2tecnicas.controllers;

import br.edu.uni7.vp2tecnicas.models.Pecas;
import br.edu.uni7.vp2tecnicas.repository.PecasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class PecasController {
    private final PecasRepository repository;

    @Autowired
    public PecasController(PecasRepository repository){
        this.repository = repository;
    }

    @ResponseBody
    @RequestMapping(value = "pecas", method =  RequestMethod.POST)
    public Pecas create(@RequestBody Pecas pecas){
        repository.create(pecas);
        return pecas;
    }

    @ResponseBody
    @RequestMapping(value = "pecas", method =  RequestMethod.GET)
    public List<Pecas> list(){
        return repository.list();
    }

    @ResponseBody
    @RequestMapping(value = "pecas/{id}", method =  RequestMethod.GET)
    public Pecas getById(@PathVariable Integer id){
        return repository.getById(id);
    }

    @ResponseBody
    @RequestMapping(value = "pecas/{id}", method =  RequestMethod.PUT)
    public Pecas update(@PathVariable Integer id,@RequestBody Pecas pecas){
        repository.update(id, pecas);
        return pecas;
    }

    @ResponseBody
    @RequestMapping(value = "pecas/{id}", method =  RequestMethod.DELETE)
    public void delete(@PathVariable Integer id){
        repository.delete(id);
    }


}
