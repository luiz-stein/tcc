//funcoes javascript e integracao solidity
var enderecoContrato = "0x845B94a2F8461359c7b623A763bB3e0665BB829F";
var provider = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signer = provider.getSigner();
var contract = new ethers.Contract(enderecoContrato, contractEscrow, signer);


function enviarGarantiaVenda()
{
    document.getElementById('status_garantia_venda').innerHTML = "<b>Transacao enviada ....</b>";
    var additionalSettings = 
    {
        value: 200000000
    };

    contract.DepositarGarantiaVendedor(additionalSettings)
        .then((tx) => 
        {
            console.log("executePayment - Transaction ", tx);
            document.getElementById('label_mensagem_garantia_vendedor').innerHTML = "<b>Aguardando resultado ...</b>";
            tx.wait()
                .then((resultFromContract) => {
                    console.log("executePayment - the result was ", resultFromContract);
                
                    document.getElementById('status_garantia_venda').innerHTML = "<b>Valor transferido da Garantia</b>";
                    document.getElementById('id-garantia-vendedor').style.display = 'none';
                })
                .catch((err) => {
                    console.error("executePayment - after tx being mint");
                    console.error(err);
                    document.getElementById('status_garantia_venda').innerHTML = "<b>Erro ao transferir a Garantia</b>" + " " + err.message;
                    document.getElementById('id-garantia-vendedor').style.display = 'none';
                })
        })
        .catch((err) => {
            console.error("executePayment - tx has been sent");
            console.error(err);
            document.getElementById('status_garantia_venda').innerHTML = "<b>Erro ao transferir a Garantia</b>" + err.message;
            document.getElementById('id-garantia-vendedor').style.display = 'none';
        })

}

function enviarGarantiaCompra()
{
    document.getElementById('status_garantia_compra').innerHTML = "<b>Transacao enviada ....</b>";
        var additionalSettings = 
        {
            value: 200000000
        }; 
    
        contract.DepositarGarantiaComprador(additionalSettings)
        .then( (tx) => 
        {
            console.log("executePayment - Transaction ", tx);   
            document.getElementById('label_mensagem_garantia_comprador').innerHTML = "<b>Aguardando resutado ...</b>";
            tx.wait()
        .then( (resultFromContract) => 
        {
                console.log("executePayment - the result was ", resultFromContract);
                document.getElementById('status_garantia_compra').innerHTML = "<b>Valor transferido da Garantia</b>";
                document.getElementById('id-garantia-comprador').style.display = 'none';
        })        
        .catch( (err) => 
        {
            console.error("executePayment - after tx being mint");
            console.error(err);
            document.getElementById('status_garantia_compra').innerHTML = "<b>Erro ao transferir a Garantia</b>" + err.message;
            document.getElementById('id-garantia-comprador').style.display = 'none';
        })
    })
        .catch( (err) => {
         console.error("executePayment - tx has been sent");
         console.error(err);
        document.getElementById('status_garantia_compra').innerHTML = "<b>Erro ao transferir a Garantia</b>" + err.message;
        document.getElementById('id-garantia-comprador').style.display = 'none';
           
    })
}

function encerrarContrato()
{
   console.log("EncerrarCompra - submitting the request");     
   contract.EncerrarCompra()
   .then( (resultFromContract) => {
     console.log("encerrarcompra- result is", resultFromContract);
     document.getElementById('status_encerrado').innerHTML = "<b>Contrato Encerrado</b>";
     document.getElementById('id-encerrado').style.display = 'none';  
   
})
.catch( (err) => {
    console.error(err);
    alert("A screen will be load asking to allow this page to connect with your Ethereum account.\nPlease give this permission to proceed.\nOr if you don't have an Ethereum account please install Metamask");
    alert("After you give the permission we are going to reload the page");
    document.getElementById('status_encerrado').innerHTML = "<b>Contato Encerrado</b>" + err.message;
    document.location = "index.html";
})
}
