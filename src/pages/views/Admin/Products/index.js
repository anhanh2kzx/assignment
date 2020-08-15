import React,{useState} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import apiProduct from '../../../../api/productApi';
import axios from 'axios';

const ProductsManager = ({ products, onRemove,onSearch }) => {
  const removeHandle = (id) => {
    onRemove(id)
  }
 
    const [currentPage,setCurrentPage] = useState(1);
    const [prsPerPage,setPostsPerPage] = useState(5);
    const indexOfLastPost= currentPage*prsPerPage;
    const indexOfFirtPost =indexOfLastPost - prsPerPage;
  const [search, setSearch] = useState("");
  const onchange = e => {
    const { name, value } = e.target;
    setSearch(value);
    console.log(search)
  }
  const product = products.filter(pr => {
    return pr.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  const newProduct = product.slice(indexOfFirtPost,indexOfLastPost)
    const pageNumbers=[];
    for(let i =1;i<=Math.ceil(product.length / prsPerPage);i++){
            pageNumbers.push(i);
    }
    const handleClick = page => setCurrentPage(page);
    //change page
    const paginate = (pageNumber)=>setCurrentPage(pageNumber);
 
  return (
    
    <div>
      
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a><i className="fa fa-angle-right" />Product</li>
      </ol>
      <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1> 
            </div>
            <Link to="/admin/product/add" className="btn btn-primary">Thêm sản phẩm</Link>
                <input style={{width: '500px', float: 'left', margin: '0px 10px'}} autoComplete="off" name='search' onChange={onchange} className="form-control" name="search" placeholder="Enter keywords" type="text" />
      <div className="agile-tables">
        <div className="w3l-table-info">
        </div>
        <h3>List Product</h3>
        <table id="table-max-height" className="max-height">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {newProduct.map(({ id, name, image, price,desc }, index) => (
              <tr key={index}>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td><img src={image} alt="" width="50" /></td>
                <td>{price}</td>
                <td>{desc}</td>
                <td>
                  <Link className="btn btn-primary" to={`/admin/product/${id}`}>Sửa</Link>
                  <button className="btn btn-primary" onClick={() => removeHandle(id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled" >
      <a className={`${pageNumbers[0] === currentPage && "disabled"}`}
          onClick={()=>handleClick( currentPage - 1)} href="#" tabIndex={-1}>Previous</a>
    </li>
      {pageNumbers.map(page => (
    <li className="page-item active">
      <a   className={`${currentPage === page && "active"}`}
            onClick={()=>handleClick( page)}>{page}</a>
    </li>
      ))}
    <li className="page-item">
      <a className={`${pageNumbers.reverse()[0] === currentPage && "disabled"}`}
          onClick={()=>handleClick( currentPage + 1)}>Next</a>
    </li>
  </ul>
</nav>
    </div>
  )
}

ProductsManager.propTypes = {

}

export default ProductsManager
