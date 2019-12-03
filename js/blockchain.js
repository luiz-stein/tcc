//funcoes javascript e integracao solidity
var enderecoContrato = "0xaA84710Cb64e37719c86Cb6dD8f44584c6A75a49";
var provider = new ethers.providers.Web3Provider(web3.currentProvider);
var signer = provider.getSigner();
var contract = new ethers.Contract(enderecoContrato, contractEscrow, signer);

function enviarGarantiaVenda()
{
    document.getElementById('status_garantia_venda').innerHTML = "<b>Sim, transferido 2 gwei</b>";;
    document.getElementById('id-garantia-vendedor').style.display = 'none'
}

function getContractBalance() {    
    
    console.log("getContractBalance - submitting the request");     
    contractSaldoDoContrato()
    .then( (resultFromContract) => {
        console.log("getContractBalance - result is", resultFromContract);
        
    })
    .catch( (err) => {
        console.error(err);
        alert("A screen will be load asking to allow this page to connect with your Ethereum account.\nPlease give this permission to proceed.\nOr if you don't have an Ethereum account please install Metamask");
        ethereum.enable();
        alert("After you give the permission we are going to reload the page");
        document.location = "index.html";
    });
}

function enviarGarantiaCompra()
{
    var additionalSettings = 
        {
            value: "200000000"
        }; 
    contract.DepositarGarantiaComprador(additionalSettings)
        .then( (tx) => 
         {
                console.log("executePayment - Transaction ", tx);   
                document.getElementById('status_garantia_compra').innerHTML = "Aguardando a transação de garantia do comprador ...";
                tx.wait()
                .then( (resultFromContract) => 
                {
                    console.log("executePayment - the result was ", resultFromContract);
                    document.getElementById('status_garantia_compra').innerHTML = "<b>Sim, transferido 2 gwei</b>";
                    document.getElementById('id-garantia-comprador').style.display = 'none';
                })        
                .catch( (err) => 
                {
                    console.error("executePayment - after tx being mint");
                    console.error(err);
                    document.getElementById('status_garantia_compra').innerHTML = "<b>Erro. Garantia não transferida</b>";
                    document.getElementById('id-garantia-comprador').style.display = 'none';
                })
         })
       .catch( (err) => {
                console.error("executePayment - tx has been sent");
                console.error(err);
                document.getElementById('status_garantia_compra').innerHTML = "<b>Erro. Garantia não transferida</b>";
                document.getElementById('id-garantia-comprador').style.display = 'none';
       })
}

//function executePayment() 
//{
//    var amount = document.frmPayment.amount.value;       
//    if (amount<1000000000) {
//        alert("You must pay a minimum of 1 gwei to the Contract");
//        return false;
//    }
//    var motivation = document.frmPayment.motivation.value;
//    var boxCommStatus = document.getElementById("boxCommStatus");
//    boxCommStatus.innerHTML = "Sending transaction...";
//    var additionalSettings = {
//        value: ethers.utils.parseUnits(amount, 'wei')
//    }; 
//    contract.pay(motivation, additionalSettings)
//    .then( (tx) => {
//        console.log("executePayment - Transaction ", tx);   
//    boxCommStatus.innerHTML = "Transaction sent. Waiting for the result...";
//    tx.wait()
//    .then( (resultFromContract) => {
//        console.log("executePayment - the result was ", resultFromContract);
//    getContractBalance();
//    boxCommStatus.innerHTML = "Transaction executed.";
//})        
//.catch( (err) => {
//    console.error("executePayment - after tx being mint");
//console.error(err);
//boxCommStatus.innerHTML = "Algo saiu errado: " + err.message;
//})
//})
//    .catch( (err) => {
//        console.error("executePayment - tx has been sent");
//console.error(err);
//boxCommStatus.innerHTML = "Something went wrong: " + err.message;
//})
//}
