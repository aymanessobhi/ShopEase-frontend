import React, { useState } from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Button, Card, CardBody, Col, Label, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';
import { useSelector } from 'react-redux';
const DiscountValue = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps} = formik;
    const [discountValue, setDiscountValue] = useState('FIXED');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('COLLECTIONS');
    const { discountValues } = useSelector(state => state.data);
    const { appliesTo } = useSelector(state => state.data);


    const handleSpecificationChange = (e) => {
        setSelectedOption(e.target.value);
        formik.setFieldValue('specification', selectedOption);
    };

    const handleDiscountChange = (e) => {
        setDiscountValue(e.target.value);
        formik.setFieldValue('discountValue', discountValue);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleBrowserClick = () => {
        if (selectedOption === 'COLLECTIONS') {
            toggleModal();
        } else if (selectedOption === 'PRODUCTS') {
            toggleModal();
        }

    };

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                        <Row>
                            <Col md="8">
                                <div>
                                    <Label className="form-label" htmlFor="discountValue">{t('discount.discountValue')}</Label>
                                    <select className="form-control" onChange={handleDiscountChange}>
                                        <option>Sélectionner...</option>
                                        {discountValues.map((option, index) => (
                                            <option key={index} value={option.code}>{option.description}</option>
                                        ))}
                                    </select>
                                </div>
                            </Col>
                            {discountValue === 'PERCENT' && (
                                <Col md="2">
                                    <div className="mt-4">
                                        <AvField
                                            {...getFieldProps('percentage')}
                                            placeholder="%"
                                            type="number"
                                            errorMessage={t('message.required')}
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="percentage" />
                                    </div>
                                </Col>
                            )}
                            {discountValue === 'FIXED' && (
                                <Col md="4">
                                    <div className="mt-4">
                                        <AvField
                                            {...getFieldProps('amount')}
                                            placeholder="MAD"
                                            type="text"
                                            errorMessage={t('message.required')}
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="amount"
                                        />
                                    </div>
                                </Col>
                            )}
                        </Row>
                        <Row>
                            <Col md="12">
                                <div>
                                    <Label className="form-label" htmlFor="specification">{t('discount.specification')}</Label>
                                    <select className="form-control" onChange={handleSpecificationChange}>
                                        <option>Sélectionner...</option>
                                        {appliesTo.map(option => (
                                            <option key={option.code} value={option.code}>{option.description}</option>
                                        ))}
                                    </select>
                                </div>
                            </Col>
                            <Col md="10">
                                <div className="mt-1">
                                    {selectedOption === 'COLLECTIONS' && (
                                        <AvField
                                            {...getFieldProps('searchCollections')}
                                            placeholder={t('discount.searchCollections')}
                                            type="text"
                                            errorMessage={t('message.required')}
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="searchCollections"
                                        />
                                    )}
                                    {selectedOption === 'PRODUCTS' && (
                                        <AvField
                                            {...getFieldProps('searchProducts')}
                                            placeholder={t('discount.searchProducts')}
                                            type="text"
                                            errorMessage={t('message.required')}
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="searchProducts"
                                        />
                                    )}
                                </div>
                            </Col>
                            <Col md="2">
                                <div className="mt-1">
                                    <Button
                                        style={{
                                            backgroundColor: '#FFFFFF',
                                            border: 'none',
                                            color: '#000000',
                                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                                        }}
                                        onClick={handleBrowserClick}
                                    >
                                        {t('action.browser')}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        {discountValue === 'FIXED' && (
                            <Row>
                                <Col md="12">
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" {...getFieldProps('OncePerOrder')} className="form-check-input" id="OncePerOrder" />
                                        <Label className="form-check-label" htmlFor="OncePerOrder">{t('discount.OncePerOrder')}</Label>
                                        <p>{t('discount.itemizedDiscount')}</p>
                                    </div>
                                </Col>
                            </Row>
                        )}
                </CardBody>
            </Card>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>{t(`modal.title.${selectedOption}`)}</ModalHeader>
                <ModalBody>
                </ModalBody>
            </Modal>
        </FormikProvider>

    );
}

export default DiscountValue;
