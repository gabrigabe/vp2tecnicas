package br.edu.uni7.vp2tecnicas.models;

import java.util.List;

public class Servicos {
    private Integer id;
    private String nomeServico;
    private Double custoPecas;
    private Double custoServico;
    private Double precoTotal;

    public Servicos(){

    }



    public Servicos(Integer id, String nomeServico, Double custoPecas, Double custoServico, Double precoPecas, Double precoTotal){

        this.id = id;;
        this.nomeServico = nomeServico;
        this.custoPecas = custoPecas;
        this.custoServico = custoServico;
        this.precoTotal = precoTotal;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomeServico() {
        return nomeServico;
    }

    public void setNomeServico(String nomeServico) {
        this.nomeServico = nomeServico;
    }

    public Double getCustoPecas() {
        return custoPecas;
    }

    public void setCustoPecas(Double custoPecas) {
        this.custoPecas = custoPecas;
    }


    public Double getCustoServico() {
        return custoServico;
    }

    public void setCustoServico(Double custoServico) {
        this.custoServico = custoServico;
    }



    public Double getPrecoTotal() {
        return precoTotal;
    }

    public void setPrecoTotal(Double precoTotal) {
        this.precoTotal = precoTotal;
    }


}
