import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Table";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 20,'1'),
    new Cliente('Bia', 30,'2'),
    new Cliente('Laura', 18,'3'),
    new Cliente('Pedro', 21,'4'),
  
  ]

  function clienteSelecionado(cliente:Cliente){

  }
  function clienteExcluido(cliente:Cliente){
    console.log(`Excluir...${cliente.nome }`)
  }


  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500  to-purple-500
      text-white
    `}>
  
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao className="mb-4">Novo Cliente</Botao>
        </div>
        {/* 
        <Tabela clientes={clientes}
        clienteSelecionado={clienteSelecionado} 
        clienteExcluido={clienteExcluido}/>
        */}

       <Formulario cliente={clientes[2]}></Formulario>
      </Layout>
    
     
    </div>
  )


}
