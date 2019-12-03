pragma solidity >=0.5.12;

contract Escrow
{
    address payable private addressComprador; 
    address payable private addressVendedor;
    
    bool public produtoFoiEnviado = false;
    bool public garantiaVendedorFoiFeita = false;
    bool public garantiaCompradorFoiFeita = false;
    
    string public descricaoDoProduto;
    
    uint256 public valorDoProduto;
    uint256 public valorDevolvidoComprador;
    uint256 public valorDevolvidoVendedor;
    
    constructor(address payable novo_comprador, string memory descricao_do_produto, uint256 valor_do_produto ) public 
    {
        addressVendedor = msg.sender;
        addressComprador = novo_comprador;
        
        descricaoDoProduto = descricao_do_produto;
        valorDoProduto = valor_do_produto;
    }
    
    // garantias
    
    function DepositarGarantiaVendedor() payable public produtoFoiEntregueEPago
    {
        //O deposito do vendedor requer estes pre-requisitos, sendo que o comprador devera se manifestar primeiro.
        // a garantia ja vem conferida na propria interface do usuario no site
        
        require (addressVendedor == msg.sender, "Quem esta tentando depositar a garantia nao é o vendedor");
        require( garantiaVendedorFoiFeita == false,"A garantia do vendedor ja foi feita");
        require( garantiaCompradorFoiFeita,"A garantia do comprador não foi feita");

        garantiaVendedorFoiFeita = true;
    } 
    
    function DepositarGarantiaComprador() payable public produtoFoiEntregueEPago
    {
        // O deposito do comprador requer estes pre-requisitos
        // a garantia ja vem conferida na propria interface do usuario no site
        
        require (addressComprador == msg.sender, "Quem esta tentando depositar a garantia nao é o comprador");
        require( garantiaCompradorFoiFeita == false,"A garantia do comprador ja foi feita");

        garantiaCompradorFoiFeita = true;
    } 
    
    // encerramento do contrato
    
    function EncerrarCompra() payable public produtoFoiEntregueEPago
    {
        require (addressComprador == msg.sender, "Somente o comprador podera encerrar a compra");
        require( garantiaVendedorFoiFeita,"A garantia do vendedor nao foi feita");
        require( garantiaCompradorFoiFeita,"A garantia do comprador nao foi feita");
        
        valorDevolvidoVendedor = (address(this).balance / 2) + valorDoProduto;
        addressVendedor.transfer( (address(this).balance / 2) + valorDoProduto );
        
        valorDevolvidoComprador = address(this).balance;
        addressComprador.transfer( address(this).balance );
        
        produtoFoiEnviado = true;
    }
    
    function SaldoDoContrato() view public returns(uint256)
    {
        return address(this).balance;
    }
    
    modifier produtoFoiEntregueEPago
    {
        require(produtoFoiEnviado == false, "O Produto foi pago e entregue");
        _;
    }

} 