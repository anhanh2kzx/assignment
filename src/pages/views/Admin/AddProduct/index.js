import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import firebase from '../../../../firebase';


const AddProduct = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    let history = useHistory();
    // const [desc,setDesc] = useState("");
    // const [valueInput, setValueInput] = useState({});

    // const onHandleChange = (e) => {
    //     const { name, value } = e.target;
    //     setValueInput({
    //         ...valueInput,
    //         [name]: value
    //     })
    // }

    const onHandleSubmit = (data) => {
        let file = data.image[0];
        // tạo folder chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        let uploadTask = storageRef.put(file);
        // thực hiện việc đầy ảnh lên firebase
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED);

        // lấy ảnh từ Firebase
        firebase.storage().ref().child(`images/${file.name}`).getDownloadURL().then((url) => {
            // Tạo object mới chứa toàn bộ thông tin từ input
            const newData = {
                id: Math.random().toString(36).substr(2, 9),
                ...data,
                image: url
            }
            // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
            onAdd(newData)
            history.push('/admin/products');
        })
    }
    // const imagesArr = [];
    // const onHandleSubmit = (data) => {
    //     let files = data.image;
    //     for(let file of files){
    //         // tạo reference chứa ảnh trên firebase
    //         let storageRef = firebase.storage().ref(`images/${file.name}`);
    //         // đẩy ảnh lên trên đường dẫn
    //         storageRef.put(file).then(function(){
    //             storageRef.getDownloadURL().then((url) =>{
    //                 imagesArr.push(url);
    //             })
    //         })
    //     }
    //     setTimeout(()=>{
    //         const newData = {
    //             id: Math.random().toString(36).substr(2, 9),
    //             ...data,
    //             gallery : imagesArr
    //         }
    //         onAdd(newData);
    // console.log(newData)

    //     },1000)
    // }
    return (
        <div>
            <form action="" className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="productName"
                        ref={register({ required: true, minLength: 10 })}
                        aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Khong duoc de trong</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 10</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input"  id="inputGroupFile02" name="image"  ref={register({ required: true })}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Giá sản phẩm</label>
                    <input
                        type="text"
                        name="price"
                        className="form-control"
                        id="productPrice"
                        ref={register({ required: true })}
                        aria-describedby="priceHelp"
                    />
                    <small id="priceHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="productDesc">Mô tả sản phẩm</label>
                    <input
                        type="text"
                        name="desc"
                        className="form-control"
                        id="productDesc"
                        ref={register({ required: true })}
                        aria-describedby="descHelp"
                    />
                    <small id="descHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Khong duoc de trong</span>}
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct
