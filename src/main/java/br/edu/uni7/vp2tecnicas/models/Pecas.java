package br.edu.uni7.vp2tecnicas.models;

public class Pecas {
    private Integer id;
    public String nome;
    private String fabricante;
    private Integer estoque;
    private Double preco;

    public Pecas() {

    }

    public Pecas(Integer id,String nome, String fabricante, Integer estoque, Double preco){
        this.nome = nome;
        this.fabricante = fabricante;
        this.estoque = estoque;
        this.preco = preco;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public Integer getEstoque() {
        return estoque;
    }

    public void setEstoque(Integer estoque) {
        this.estoque = estoque;
    }
}


