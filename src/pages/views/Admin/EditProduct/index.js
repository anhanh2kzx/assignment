import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import apiProduct from "../../../../api/productApi"


const EditProduct = ({ products, onUpdate }) => {
    // let { id } = useParams();
    // let history = useHistory();
    // const product = products.find(product => product.id === id);

    // const [currentProduct, setCurrentProduct] = useState(product);

    // const onHandleSubmit = (e) => {
    //     e.preventDefault();
    //     onUpdate(currentProduct);
    //     history.push('/admin/products');
    // }
    // const onHandleChange = e => {
    //     const { name, value } = e.target;
    //     setCurrentProduct({
    //         ...currentProduct,
    //         [name]: value
    //     })
    // }
    const {register,handleSubmit,errors } = useForm();
  const [currentProduct, setCurrentProduct] = useState({});
 
  let { id } = useParams();
  let history = useHistory();
  useEffect(()=>{
    const getProduct =async()=>{
      try{
        const {data}= await apiProduct.get(id);
        console.log(data)
        setCurrentProduct(data)
      }
      catch(error){
        console.log('Faile to request API',error)
      }
    }
    getProduct()
  },{})


  const onHandleChange = e => {
      const { name, value } = e.target;
      setCurrentProduct({
          ...currentProduct,
          [name]: value
      })
  }
  const onHandleSubmit=(data)=>{
    console.log(data)
    setCurrentProduct(data);
    // console.log(currentProduct)
      onUpdate(id,currentProduct);
     
      history.push('/admin/products')
  }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text" name="name"  ref={register({ required: true, minLength: 10 })} value={currentProduct.name} onChange={onHandleChange} className="form-control" />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Khong duoc de trong</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 10</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input"  id="inputGroupFile02" name="image"  ref={register({ required: true })}  onChange={onHandleChange}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text" name="price" ref={register()} value={currentProduct.price} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productDesc">Mô tả sản phẩm</label>
                    <input type="text" name="desc" ref={register()} value={currentProduct.desc} onChange={onHandleChange} className="form-control" />
                </div>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct
