var contractEscrow = [
	{
	    "constant": false,
	    "inputs": [],
	    "name": "DepositarGarantiaComprador",
	    "outputs": [],
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [],
	    "name": "DepositarGarantiaVendedor",
	    "outputs": [],
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "constant": false,
	    "inputs": [],
	    "name": "EncerrarCompra",
	    "outputs": [],
	    "payable": true,
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address payable",
			    "name": "novo_comprador",
			    "type": "address"
			},
			{
			    "internalType": "string",
			    "name": "descricao_do_produto",
			    "type": "string"
			},
			{
			    "internalType": "uint256",
			    "name": "valor_do_produto",
			    "type": "uint256"
			}
	    ],
	    "payable": false,
	    "stateMutability": "nonpayable",
	    "type": "constructor"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "descricaoDoProduto",
	    "outputs": [
			{
			    "internalType": "string",
			    "name": "",
			    "type": "string"
			}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "garantiaCompradorFoiFeita",
	    "outputs": [
			{
			    "internalType": "bool",
			    "name": "",
			    "type": "bool"
			}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "garantiaVendedorFoiFeita",
	    "outputs": [
			{
			    "internalType": "bool",
			    "name": "",
			    "type": "bool"
			}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "produtoFoiEnviado",
	    "outputs": [
			{
			    "internalType": "bool",
			    "name": "",
			    "type": "bool"
			}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "SaldoDoContrato",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "valorDevolvidoComprador",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "valorDevolvidoVendedor",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "constant": true,
	    "inputs": [],
	    "name": "valorDoProduto",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "payable": false,
	    "stateMutability": "view",
	    "type": "function"
	}
]