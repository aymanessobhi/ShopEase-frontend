import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import discount from "../../assets/images/discount.png";

const discountTypes = [
    { value: 'amountOffProduct', label: 'Amount Off Product' },
    { value: 'percentage', label: 'Percentage' },
    { value: 'buyXgetY', label: 'Buy X Get Y' },
];

const EmptyDiscount = () => {
    const { t } = useTranslation('translation');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleDiscountTypeChange = (type) => {
        toggleModal();
        navigate(`/base/discount/new/${type}`);
    };

    return (
        <Card >
            <CardBody>
                <div className="mb-4 d-flex justify-content-center text-center">
                    <img src={discount} alt="Discount" style={{ maxWidth: '30%', height: 'auto' }} />
                </div>
                <div className="mb-1 d-flex justify-content-center text-center">
                    <h4>{t('discount.manage')}</h4>
                </div>
                <div className="mb-2 d-flex justify-content-center text-center">
                    <p>{t('discount.createDiscountDescription')}<Link>{t('discount.pricesLink')}</Link></p>
                </div>

                <Col md="12" className="d-flex justify-content-center text-center">
                    <Button color="primary" onClick={toggleModal}>{t('discount.createDiscount')}</Button>
                </Col>

                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>{t('discount.createDiscount')}</ModalHeader>
                    <ModalBody>
                        <div>
                            {discountTypes.map((type) => (
                                <div key={type.value}>
                                    <Card style={{ cursor: 'pointer', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '0.25rem' }} onClick={() => handleDiscountTypeChange(type.value)}>
                                        <CardBody>
                                            <p>{type.label}</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggleModal}>{t('discount.cancel')}</Button>
                    </ModalFooter>
                </Modal>
            </CardBody>
        </Card>
    );
};

export default EmptyDiscount;
