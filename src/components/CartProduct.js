import React, {useState} from "react";

const CartProduct = ({product, editQuantity, removeProduct }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const changeQuantity = (event) => {
    event.preventDefault();
    editQuantity(product.id, quantity);
    
  }

  return(
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title pb-3">{product.name}</h5>
        <p className="card-text ">Preço: R$ {(product.price).toFixed(2)}</p>
        <form onSubmit={changeQuantity}>
          <label className="sr-only" htmlFor="quantityInput">Quantidade:</label>
          <input
            type="number"
            min= "1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder={product.quantity}
            className="form-control"
            id="quantityInput"
          />
          <button className="btn btn-outline-info mt-2 " type="submit">Atualizar</button>
        </form>
        <p className="card-text mt-2">Subtotal: R$ {(product.price * quantity).toFixed(2)}</p>
        <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
          </svg>
        </button>
        
      </div>
  </div>
  );
}

export default CartProduct;
  