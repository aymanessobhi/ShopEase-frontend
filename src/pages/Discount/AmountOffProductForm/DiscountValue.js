import React, { useState } from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Button, Card, CardBody, Col, Label, Row, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';

const DiscountValue = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps, values } = formik;
    const [discountValue, setDiscountValue] = useState('percentage');
    const [modalOpen, setModalOpen] = useState(false);

    const handleDiscountChange = (e) => {
        setDiscountValue(e.target.value);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleBrowserClick = () => {
        if (values.specification === 'collections' || values.specification === 'products') {
            toggleModal();
        }
    };

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <Row>
                            <Col md="8">
                                <div>
                                    <Label className="form-label" htmlFor="discountValue">{t('discount.discountValue')}</Label>
                                    <AvField
                                        {...getFieldProps('discountValue')}
                                        placeholder={t('discount.discountValue')}
                                        type="select"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="discountValue"
                                        onChange={handleDiscountChange}
                                    >
                                        <option value="percentage">{t('discount.percentage')}</option>
                                        <option value="fixedAmount">{t('discount.fixedAmount')}</option>
                                    </AvField>
                                </div>
                            </Col>
                            {discountValue === 'percentage' && (
                                <Col md="4">
                                    <div className="mt-4">
                                        <AvField
                                            {...getFieldProps('percentage')}
                                            placeholder="%"
                                            type="number"
                                            errorMessage={t('message.required')}
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="percentage"
                                        />
                                    </div>
                                </Col>
                            )}
                            {discountValue === 'fixedAmount' && (
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
                                    <AvField
                                        {...getFieldProps('specification')}
                                        placeholder={t('discount.specification')}
                                        type="select"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="specification"
                                    >
                                        <option value="collections">{t('discount.collections')}</option>
                                        <option value="products">{t('discount.products')}</option>
                                    </AvField>
                                </div>
                            </Col>
                            <Col md="10">
                                <div className="mt-1">
                                    <AvField
                                        {...getFieldProps('searchCollections')}
                                        placeholder={t('discount.searchCollections')}
                                        type="text"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="searchCollections"
                                    />
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
                        {discountValue === 'fixedAmount' && (
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
                    </AvForm>
                </CardBody>
            </Card>
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>{t(`modal.title.${values.specification}`)}</ModalHeader>
                <ModalBody>
                    {/* Content of the modal */}
                </ModalBody>
            </Modal>
        </FormikProvider>
        
    );
}

export default DiscountValue;
