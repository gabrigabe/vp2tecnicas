package br.edu.uni7.vp2tecnicas.repository;

import br.edu.uni7.vp2tecnicas.models.Pecas;
import br.edu.uni7.vp2tecnicas.models.Servicos;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ServicosRepository {

    private static Integer contador = 1;
    private final Map<Integer, Servicos> servicosMap;

    public ServicosRepository() {
        servicosMap = new HashMap<>();
    }

    public Servicos create(Servicos servicos){
        int id = contador;
        contador++;
        servicosMap.put(id, servicos);
        servicos.setId(id);
        return servicos;

    }


    public List<Servicos> list(){
        return new ArrayList<>(servicosMap.values());
    }

    public Servicos getById(Integer id){
        if(!servicosMap.containsKey(id)){
            throw new IllegalArgumentException("Id inexistente");
        }
        return servicosMap.get(id);
    }

    public Servicos update(Integer id, Servicos servicos){
        if(!servicosMap.containsKey(id)) {
            throw new IllegalArgumentException("Id inexistente");
        }
        servicosMap.put(id, servicos);
        servicos.setId(id);
        return servicos;
    }

    public void delete(Integer id) {
        if(!servicosMap.containsKey(id)){
            throw new IllegalArgumentException("Id inexistente");
        }
        servicosMap.remove(id);
    }
}
