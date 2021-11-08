package br.edu.uni7.vp2tecnicas.repository;

import br.edu.uni7.vp2tecnicas.models.Pecas;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class PecasRepository {
    private static Integer contador = 1;
    private final Map<Integer, Pecas> pecasMap;

    public PecasRepository() {
        pecasMap = new HashMap<>();
    }
    public Pecas create(Pecas pecas){
        int id = contador;
        contador++;

        pecasMap.put(id, pecas);
        pecas.setId(id);
        return pecas;
    }

    public List<Pecas> list(){
        return new ArrayList<>(pecasMap.values());
    }

    public Pecas getById(Integer id){
        if(!pecasMap.containsKey(id)){
            throw new IllegalArgumentException("Id inexistente");
        }
        return pecasMap.get(id);
    }

    public Pecas update(Integer id, Pecas pecas){
        if(!pecasMap.containsKey(id)) {
            throw new IllegalArgumentException("Id inexistente");
        }
        pecasMap.put(id, pecas);
        pecas.setId(id);
        return pecas;
    }


    public void delete(Integer id) {
        if(!pecasMap.containsKey(id)){
            throw new IllegalArgumentException("Id inexistente");
        }
        pecasMap.remove(id);
    }
}
