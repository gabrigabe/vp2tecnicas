package br.edu.uni7.vp2tecnicas.controllers;


import br.edu.uni7.vp2tecnicas.models.Pecas;
import br.edu.uni7.vp2tecnicas.models.Servicos;
import br.edu.uni7.vp2tecnicas.repository.PecasRepository;
import br.edu.uni7.vp2tecnicas.repository.ServicosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class ServicosController {
    private final ServicosRepository repository;
    private final PecasRepository pRepository;

    @Autowired
    public ServicosController(ServicosRepository repository, PecasRepository pRepository){
        this.repository = repository;
        this.pRepository = pRepository;
    }

    @ResponseBody
    @RequestMapping(value = "servicos", method =  RequestMethod.POST)
    public Servicos create(@RequestBody Servicos servicos, Pecas pecas){
        repository.create(servicos);;
        return  servicos;
    }
    @ResponseBody
    @RequestMapping(value = "servicos", method =  RequestMethod.GET)
    public List<Servicos> list(){
        return repository.list();
    }

    @ResponseBody
    @RequestMapping(value = "servicos/{id}", method =  RequestMethod.GET)
    public Servicos getById(@PathVariable Integer id){
        return repository.getById(id);
    }

    @ResponseBody
    @RequestMapping(value = "servicos/{id}", method =  RequestMethod.PUT)
    public Servicos update(@PathVariable Integer id,@RequestBody Servicos servicos){
        repository.update(id, servicos);
        return servicos;
    }

    @ResponseBody
    @RequestMapping(value = "servicos/{id}", method =  RequestMethod.DELETE)
    public void delete(@PathVariable Integer id){
        repository.delete(id);
    }
}
