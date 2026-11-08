
import { useState } from "react"

const ShpingChart = () => {
    const [products, setProducts] = useState([]);

    // Product Name
    const [productName, setproductName] = useState("");

    // Product Price
    const [productPrice, setProductPrice] = useState("");

    const handleAddProduct = () => {
        if (
            productName.trim() !== "" &&
            productPrice.trim() !== "" &&
            Number(productPrice) > 0
        ) {
            const NewProduct = {
                id: Date.now(),
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            };

            setProducts([...products, NewProduct]);

            setproductName("");
            setProductPrice("");
        }

    };


    const removeProduct = (id) => {
        const UpdatedProducts = products.filter(
            product => product.id !== id
        );

        setProducts(UpdatedProducts);
    };
    const inCreaseQuantity = (id)=>{
        const UpdatedProducts = products.map(product =>(
            product.id === id ? {...product, quantity : product.quantity +1} : product
        ))
        setProducts(UpdatedProducts)
    }
    const decRease =(id)=>{
        const UpdatedProducts = products.map(product =>(
            product.id === id && product.quantity >1 ? {... product, quantity: product.quantity -1}: product
        ))
        setProducts(UpdatedProducts)
    }

    const totalPrice = products.reduce((total, product)=>total + product.price*product.quantity,0)

    return (
        <>
            <div>
                <h2>Simple Shopping Cart</h2>
                <h4>Add a Product</h4>

                <input
                    type="text"
                    placeholder="Product Name"
                    onChange={(e) =>
                        setproductName(e.target.value)
                    }
                    value={productName}
                />

                <input
                    type="number"
                    min="0"
                    placeholder="Price"
                    onChange={(e) =>
                        setProductPrice(e.target.value)
                    }
                    value={productPrice}
                />

                <button onClick={handleAddProduct}>
                    Add
                </button>
            </div>

            {products.length > 0 ? (
                <div>
                    <h3>Products in Cart</h3>

                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <strong>{product.name}</strong>
                                {" - "}
                                ${product.price.toFixed(2)} <br />
                                <div>
                                    Quantity
                                    <button onClick={()=> decRease (product.id)}>-</button>
                                    {product.quantity}
                                    <button onClick={()=> inCreaseQuantity (product.id)}>+</button>
                                </div>
                                <button onClick={() => removeProduct(product.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <h4>Total price $ {totalPrice}</h4>
                </div>
            ) : (
                <p>This cart is empty</p>
            )}
        </>
    );
};

export default ShpingChart;
