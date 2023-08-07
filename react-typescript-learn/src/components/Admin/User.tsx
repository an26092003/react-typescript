import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style__1.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { faPenFancy, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const User = () => {
    const [name, setName] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [email, setEmail] = useState<string>('');

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
        if (!pass || pass.length === 0) {

            newErrors.push("Price không được để trống");
        }
        else if (pass.length < 10) { // chiều dài email phải lớn hơn 6 ký tự

            newErrors.push("Chiều dài mô tả phải lớn hơn 10 ký tự ");
        }

        if (!email || email.length === 0) {

            newErrors.push("Email không được để trống");
        }
        else if (email.length < 10) { // chiều dài email phải lớn hơn 6 ký tự

            newErrors.push("Chiều dài email phải lớn hơn 10 ký tự ");
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
            <table className="table-responsive table__admin">
                <thead>
                    <tr>
                        <td></td>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Year</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr__body">
                        <td><img src="https://savani.vn/images/products/2022/11/28/large/ao-so-mi-nu-WLS005-3-B0057-1.jpg" alt="" className='image__list' /></td>
                        <td>Đào Duy Ẩn</td>
                        <td>Unassigned</td>
                        <td>daoan26@gmail.com</td>
                        <td>Successful</td>
                        <td>1 year</td>
                        <td style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='btn btn-info'><FontAwesomeIcon icon={faPenFancy} /></button>
                            <button className='btn btn-warning'><FontAwesomeIcon icon={faTrash} /></button>

                        </td>
                    </tr>
                    <tr className="tr__body">
                        <td><img src="https://savani.vn/images/products/2022/11/28/large/ao-so-mi-nu-WLS005-3-B0057-1.jpg" alt="" className='image__list' /></td>
                        <td>Đào Duy Ẩn</td>
                        <td>Unassigned</td>
                        <td>daoan26@gmail.com</td>
                        <td>Successful</td>
                        <td>1 year</td>
                        <td style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='btn btn-info'><FontAwesomeIcon icon={faPenFancy} /></button>
                            <button className='btn btn-warning'><FontAwesomeIcon icon={faTrash} /></button>

                        </td>
                    </tr>
                    <tr className="tr__body">
                        <td><img src="https://savani.vn/images/products/2022/11/28/large/ao-so-mi-nu-WLS005-3-B0057-1.jpg" alt="" className='image__list' /></td>
                        <td>Đào Duy Ẩn</td>
                        <td>Unassigned</td>
                        <td>daoan26@gmail.com</td>
                        <td>Successful</td>
                        <td>1 year</td>
                        <td style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='btn btn-info'><FontAwesomeIcon icon={faPenFancy} /></button>
                            <button className='btn btn-warning'><FontAwesomeIcon icon={faTrash} /></button>

                        </td>
                    </tr>
                    <tr className="tr__body">
                        <td><img src="https://savani.vn/images/products/2022/11/28/large/ao-so-mi-nu-WLS005-3-B0057-1.jpg" alt="" className='image__list' /></td>
                        <td>Đào Duy Ẩn</td>
                        <td>Unassigned</td>
                        <td>daoan26@gmail.com</td>
                        <td>Successful</td>
                        <td>1 year</td>
                        <td style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='btn btn-info'><FontAwesomeIcon icon={faPenFancy} /></button>
                            <button className='btn btn-warning'><FontAwesomeIcon icon={faTrash} /></button>

                        </td>
                    </tr>
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
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pass</label>
                            <input type="password" className="form-control" onChange={(event) => setPass(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" onChange={(event) => setEmail(event.target.value)} />
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

export default User