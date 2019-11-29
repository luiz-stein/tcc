pragma solidity >=0.5.12;

contract Escrow {
    
    address payable public comprador; 
    address payable public vendedor;
    uint256 public preco;
    bool public entregue;  
    
    constructor (address payable novo_comprador, address payable novo_vendedor, uint256 novo_preco) public {
        comprador = novo_comprador;
        vendedor = novo_vendedor;
        preco = novo_preco;
        entregue = false;
    }

    function pagamento () payable public {
        //O produto pode não ter sido entregue ainda
        require (!entregue, "O Produto foi pago e entregue ");
        
        //Quem está enviando deve ser o comprador
        require (comprador == msg.sender, "Quem esta tentando pagar nao é o comprador");
        
        //O valor enviado deve ser igual ao preço
        require (msg.value == preco, "Valor está diferente do preco");

        //entrega produto para o comprador
        entregue = true;
        
                
        //transfere valor para o vendedor
        if (preco > 0) {
            address(vendedor).transfer(msg.value);
        }
                
    } 
    
    function definirPartes (address payable _comprador, address payable _vendedor, uint256 _preco) public {
        //Só pode reiniciar se o produto já foi entregue
        require (entregue, "Em andamento, não é possível alterar"); 
        
        comprador = _comprador;
        vendedor = _vendedor;
        preco = _preco;
        entregue = false;
    }
} 
