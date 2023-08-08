import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style__1.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { faPenFancy, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Product } from '../../interface/product';
import { useGetProductsQuery, useAddProductMutation, useRemoveProductMutation } from '../../api/product';
import { useGetCategoriesQuery } from '../../api/category';
const ListProduct = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [desc, setDesc] = useState<string>('');
    const [image, setImage] = useState<any>(null);
    const [categoryId, setCategoryId] = useState<string | number>('');
    const { data: products, isLoading, isError } = useGetProductsQuery()
    const [addProduct, { isLoading: isAddLoading }] = useAddProductMutation()
    const [removeProduct, { isLoading: isRemoveLoading }] = useRemoveProductMutation()
    const {data: categories} = useGetCategoriesQuery()
    // khai báo 1 state errors dảng mảng 
    const [errors, setErrors] = useState<string[]>([]);

    const onRemove = (id: string | number) => {
       
        if (window.confirm('Are you sure you want to remove')) {
            removeProduct(id)
        }
    }

    const handleSubmit = () => {
        // tạo ra 1 mảng lỗi mới 
        console.log(123);
        let newErrors: string[] = [];
        if (!name || name.length === 0) {

            newErrors.push("Name không được để trống");
        } else if (name.length < 6) { // chiều dài email phải lớn hơn 6 ký tự

            newErrors.push("Chiều dài name phải lớn hơn 6 ký tự ");
        }
        if (!price) {

            newErrors.push("Price không được để trống");
        }

        if (!desc || desc.length === 0) {

            newErrors.push("Mô tả không được để trống");
        } else if (desc.length < 10) { // chiều dài email phải lớn hơn 6 ký tự

            newErrors.push("Chiều dài mô tả phải lớn hơn 10 ký tự ");
        }

        setErrors((prevErrors) => {
            const uniqueErrors = new Set([...prevErrors, ...newErrors]);
            return Array.from(uniqueErrors);
        }) // lọc xong những phần tử trùng và sẽ 1 mảng lỗi mới vào trong
        //state errors

        const product = {
            name,
            price, 
            image,
            description: desc,
            categoryId
        } 

        addProduct(product).unwrap()
            .then(() => {
            alert('success')
        })

    }
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <><div className='content__list'>
            <button className='btn btn-success' onClick={openModal}>Thêm mới</button>
            <br />
            <br />
            <table className="table-responsive table__admin">
                <thead>
                    <tr>
                        <td>#</td>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Ảnh</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product: Product, index: number) => (

                    <tr key={product._id} className="tr__body">
                            <td>{ index + 1}</td>
                            <td>{product.name}</td>
                            <td>{ product.price}</td>
                            <td>{product.description}</td>
                        <td><img src={product.image.url} alt="" className='image__list--1' /></td>
                        <td style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='btn btn-info'><FontAwesomeIcon icon={faPenFancy} /></button>
                            <button className='btn btn-warning'><FontAwesomeIcon icon={faTrash} onClick={() => onRemove(product._id!)}/></button>

                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
            <Modal show={showModal} onHide={closeModal} >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" onChange={(event) => setPrice(+event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input type="text" className="form-control" onChange={(event) => setImage(event.target.value)} />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label" >Category</label>
                            <select name="" id="" onChange={(event) => setCategoryId(event.target.value)}>
                                {categories?.map((category) => (
                                    <option value={category._id}>{ category.name}</option>
                                ))}
                                
                                
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mô tả</label>
                            <input type="text" className="form-control" onChange={(event) => setDesc(event.target.value)} />
                        </div>

                        <button type="button" onClick={handleSubmit} className='btn btn-success'>Gửi</button>
                        {
                            errors.length > 0 && (
                                <ul>
                                    {
                                        errors.map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ListProduct