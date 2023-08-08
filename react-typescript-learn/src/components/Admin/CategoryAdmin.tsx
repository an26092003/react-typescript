import './style__1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { faPenFancy, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useGetProductsQuery } from '../../api/categories';
const CategoryAdmin = () => {
    const [name, setName] = useState<string>('');
    const { data: categories = [] } = useGetProductsQuery();


    // khai báo 1 state errors dảng mảng 
    const [errors, setErrors] = useState<string[]>([]);
    const handleSubmit = () => {
        // tạo ra 1 mảng lỗi mới 
        console.log(123);
        let newErrors: string[] = [];
        if (!name || name.length === 0) {

            newErrors.push("Name không được để trống");
        } else if (name.length < 6) { // chiều dài email phải lớn hơn 6 ký tự

            newErrors.push("Chiều dài name phải lớn hơn 6 ký tự ");
        }


        setErrors((prevErrors) => {
            const uniqueErrors = new Set([...prevErrors, ...newErrors]);
            return Array.from(uniqueErrors);
        }) // lọc xong những phần tử trùng và sẽ 1 mảng lỗi mới vào trong 
        //state errors

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
            <table className="table-responsive table__admin1">
                <thead>
                    <tr>
                        <td>#</td>
                        <th>Name</th>
                        <th style={{ width: '100px' }}>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((categori, index) => (
                        <tr className="tr__body" key={categori.catgoryId}>
                            <td>{index + 1}</td>
                            <td>{categori.nameCate}</td>
                            <td style={{ display: 'flex', alignItems: 'center', width: '100px' }}>
                                <button className='btn btn-info'><FontAwesomeIcon icon={faPenFancy} /></button>
                                <button className='btn btn-warning'><FontAwesomeIcon icon={faTrash} /></button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div >
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

export default CategoryAdmin