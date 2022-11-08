import { useEffect, useState } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../firebase/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import useTabelaouForm from "./useTabelaouForm"


export default function useClientes(){

    const {tabelaVisivel,exibirForm,exibirTabela } = useTabelaouForm()

    const repo: ClienteRepositorio = new ColecaoCliente

    const [cliente,setCliente] = useState <Cliente>(Cliente.vazio())
    const [clientes,setClientes] = useState <Cliente[]>([])
  
    useEffect(obterTodos, [])
  
    function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
    }
  
    function clienteSelecionado(cliente:Cliente){
      setCliente(cliente)
      exibirForm()
    }
    async function clienteExcluido(cliente:Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }
  
     async function salvarCliente(cliente:Cliente){
      await repo.salvar(cliente)
      obterTodos()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio())
      exibirForm()
    }
  
  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    clienteExcluido,
    clienteSelecionado,
    obterTodos, 
    tabelaVisivel,
    exibirTabela
  }

}