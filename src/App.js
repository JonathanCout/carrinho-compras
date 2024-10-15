import React, {useState} from 'react';
import Cart from './components/Cart';

// Lista de Produtos disponíveis
const products = [
  { id: 1, name: 'Maçã', price: 3.50, image: 'https://img.freepik.com/vetores-premium/personagem-de-desenho-de-mascote-de-maca-isolada-em-um-fundo-branco_508290-1289.jpg?w=740' },
  { id: 2, name: 'Banana', price: 2.00, image: 'https://img.freepik.com/vetores-gratis/desenho-de-adesivo-com-uma-banana-isolada_1308-77292.jpg?t=st=1727743629~exp=1727747229~hmac=124c9a0290abb4dedc22f8aba816f5512c2d2aea4674e5da68270887f5bb37e7&w=740' },
  { id: 3, name: 'Mamão', price: 3.00, image: 'https://img.freepik.com/vetores-gratis/ilustracao-de-giz-de-cera-desenhado-a-mao_23-2150717656.jpg?t=st=1727743705~exp=1727747305~hmac=355b80b7e40d93ea9439c18a921629618b88b940305cb9976c4c56bd21057daf&w=740' },
  { id: 4, name: 'Pão Francês', price: 0.70, image: 'https://img.freepik.com/fotos-gratis/detalhe-macro-de-pao-frances_58702-2226.jpg?t=st=1728951948~exp=1728955548~hmac=6b28c23cd36653417caf10ae7f98d2afadffccb88ade4ece8a517cf3712f32e1&w=1800' },
  { id: 5, name: 'Refrigerante', price: 5.50, image: 'https://img.freepik.com/fotos-premium/icone-de-coca-cola-em-fundo-branco-ar-32-v-52-id-de-trabalho-24bf5b2515fd4adb863f40637ad64968_941600-89262.jpg?w=1800' }
];

const App = () => {
  const [cart, setCart] = useState([]);

  // Função para adicionar produtos ao carrinho
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find(item => item.id === product.id);
    if (existingProduct !== undefined){
      console.log("Produto existente");
      existingProduct.quantity++;
      console.log(existingProduct.quantity);
    }else {
      console.log("Inserindo novo produto")
      updatedCart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity : 1
      });
    }
    console.log(updatedCart);
    setCart(updatedCart);
  };
  
  // Função para remover um produto específico do carrinho, a partir do seu ID
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  // Função para editar a quantidade de itens de um produto específico do carrinho
  const editQuantity = (id, quantity) => {
    console.log("Editando quantidade");
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find(item => item.id === id);
    existingProduct.quantity = quantity;

    setCart(updatedCart.filter(item => item.quantity > 0));
  }

  // Função para calcular o valor total do carrinho a cada vez que o componente foi reiniciado
  const totalPrice = () => {
    return cart.reduce((acc, prodct) => acc + (prodct.price * prodct.quantity),0).toFixed(2);
  }

  return (
    <div className="container my-5">
      <h1 className='my-4'>React Shopping Cart</h1>
      <div className="row pt-4">
        <div className="col ">
          <div className="row row-cols-auto">
            {/* Exibe lista dos produtos disponíveis */}
            {products.map(product => (
              <div key={product.id} className="col m-4">
                <div className="product-info">
                  <img src={product.image} alt={product.name} className="img-fluid img-thumbnail" style={{height:'150px', width: '200px'}} />
                  <h5 className='mt-2'>{product.name}</h5>
                </div>
                <button className="btn btn-success my-2" onClick={() => addToCart(product)}>Adicionar ao Carrinho - R${product.price}</button>
              </div>
              
            ))}
          </div>
        </div>
        <div className="col">
          <h2 className='text-center mb-5'>Carrinho de compras</h2>
          <div>
            {/* Inicializa e exibe o Carrinho */}
              <Cart 
                productList={cart}
                editQuantity={editQuantity}
                removeProduct={removeFromCart}
              />
            <p className="text-danger fw-bold fs-4">Total: R$ {totalPrice()}</p>
          </div>
        </div>
      </div>

    </div>
  );
};




export default App;
