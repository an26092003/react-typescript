import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chart1 from '../Admin/Chart/Chart1';
import Chart2 from '../Admin/Chart/Chart2';
import './admin__style.css'
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import Table from '../Admin/Table';
const DashBoard = () => (
    <div className='content__das'>
        <div className="dash__admin">
            <div className="box__dash">
                <div className="txt__box--dash">
                    <h6>TOTAL USER</h6>
                    <h4>72.300</h4>
                    <div className="text__das">
                        <div className='text__icon--fl'><FontAwesomeIcon icon={faChartColumn} className='icon__1' />12,7%</div>
                        <p className="text__p">from 70,102</p>
                    </div>

                </div>
                <div className="txt__box--dash">
                    <h6>TOTAL USER</h6>
                    <h4>72.300</h4>
                    <div className="text__das">
                        <div className='text__icon'><FontAwesomeIcon icon={faChartColumn} className='icon__1' />12,7%</div>
                        <p className="text__p">from 70,102</p>
                    </div>
                </div>
            </div>
            <div className="box__dash">
                <div className="txt__box--dash">
                    <h6>TOTAL USER</h6>
                    <h4>72.300</h4>
                    <div className="text__das">
                        <div className='text__icon'><FontAwesomeIcon icon={faChartColumn} className='icon__1' />12,7%</div>
                        <p className="text__p">from 70,102</p>
                    </div>
                </div>
                <div className="txt__box--dash">
                    <h6>TOTAL USER</h6>
                    <h4>72.300</h4>
                    <div className="text__das">
                        <div className='text__icon--fl'><FontAwesomeIcon icon={faChartColumn} className='icon__1' />12,7%</div>
                        <p className="text__p">from 70,102</p>
                    </div>
                </div>
            </div>
            <div className="box__dash">
                <div className="txt__box--dash">
                    <h6>TOTAL USER</h6>
                    <h4>72.300</h4>
                    <div className="text__das">
                        <div className='text__icon'><FontAwesomeIcon icon={faChartColumn} className='icon__1' />12,7%</div>
                        <p className="text__p">from 70,102</p>
                    </div>
                </div>
                <div className="txt__box--dash">
                    <h6>TOTAL USER</h6>
                    <h4>72.300</h4>
                    <div className="text__das">
                        <div className='text__icon--fl'><FontAwesomeIcon icon={faChartColumn} className='icon__1' />12,7%</div>
                        <p className="text__p">from 70,102</p>
                    </div>
                </div>
            </div>
            <Chart1 />

        </div>

        <br /> <br />
        <Table />

        <div className="flex__box-admin">
            <div className="box__admin1">
                <Chart2 />
            </div>

            <div className="box__admin-dash">

                <div className="div__box">
                    <img src="https://cache.baohoxanh.com/blog/wp-content/uploads/2022/02/a%CC%81o-so%CC%9Bmi-kie%CC%82%CC%89u.jpg" alt="" />
                </div>
                <div className="div__box1">
                    <h4>70.000</h4>
                    <del>130.000</del>
                </div>
                <h2>Áo sơ mi nữ </h2>
            </div>
        </div>
    </div>
);

export default DashBoard
