import React from "react";
import CartProduct from "./CartProduct";

const Cart = ({ productList, editQuantity, removeProduct }) => {
    console.log("lista")
    console.log(productList);

    return (
        <div>
            {productList.length === 0 ? (
                <h5 className="mb-5">Adicione algum produto ao seu carrinho!</h5>
            ) : (
                productList.map(product => {
                    return (
                        <CartProduct
                            key={product.id}
                            product={product}
                            editQuantity={editQuantity}
                            removeProduct={removeProduct}
                        />
                    )
                })
            )}
        </div>
    );
}

export default Cart;