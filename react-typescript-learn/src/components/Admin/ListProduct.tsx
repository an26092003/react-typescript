import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style__1.css';
import { faPenFancy, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useGetProductsQuery, useAddProductMutation } from '../../api/product';

const ProductList = () => {
    const { data: products = [], isLoading } = useGetProductsQuery();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState<any>(null);
    const [errors, setErrors] = useState<string[]>([]);
    const addProductMutation = useAddProductMutation();

    const handleSubmit = async () => {
        let newErrors: string[] = [];
        if (!name || name.length === 0) {
            newErrors.push('Name không được để trống');
        } else if (name.length < 6) {
            newErrors.push('Chiều dài name phải lớn hơn 6 ký tự');
        }
        if (!price || price.length === 0) {
            newErrors.push('Price không được để trống');
        }
        if (!desc || desc.length === 0) {
            newErrors.push('Mô tả không được để trống');
        } else if (desc.length < 10) {
            newErrors.push('Chiều dài mô tả phải lớn hơn 10 ký tự');
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price, desc }),
            });

            if (response.ok) {
                setName('');
                setPrice('');
                setDesc('');
                setErrors([]);
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const handleImageUpload = (event: any) => {

        const file = event.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result)

        }


    }

    return (
        <div className="content__list">
            <button className="btn btn-success" onClick={openModal}>Thêm mới</button>
            <br />
            <br />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
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
                        {products.map((product, index) => (
                            <tr className="tr__body" key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>


                                <td>
                                    <img src={product.image} alt="" className="image__list--1" />
                                </td>
                                <td style={{ display: 'flex', alignItems: 'center' }}>
                                    <button className="btn btn-info">
                                        <FontAwesomeIcon icon={faPenFancy} />
                                    </button>
                                    <button className="btn btn-warning">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
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
                            <input type="number" className="form-control" onChange={(event) => setPrice(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input type="file" className="form-control" />
                            <input type="file" className="form-control" onChange={handleImageUpload} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <select name="" id="">
                                <option value=""></option>
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
        </div>
    );
};

export default ProductList;