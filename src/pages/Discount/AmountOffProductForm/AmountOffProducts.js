import React, { useState } from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Button, ButtonGroup, Card, CardBody, Col, Label, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';

const AmountOffProducts = ({ formik, handleButtonToggle }) => {
    const { t } = useTranslation('translation');
    const [selectedButton, setSelectedButton] = useState('discountCode');
    const { getFieldProps } = formik;
    const [generatedCode, setGeneratedCode] = useState('');

    const handleButtonClick = (value) => {
        setSelectedButton(value);
        handleButtonToggle(value === 'automaticDiscount');
    };

    const generateRandomCode = () => {
        const randomCode = Math.random().toString(36).substring(2).toUpperCase();
        setGeneratedCode(randomCode);
    };

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <h4 className="card-title">{t('discount.amountOffProducts')}</h4>
                        <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{t('discount.method')}</span>
                        <Row>
                            <Col>
                                <ButtonGroup className="mt-3" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                    <Button
                                        color="primary"
                                        style={{
                                            backgroundColor: selectedButton === 'discountCode' ? '#CCCCCC' : '#FFFFFF',
                                            border: 'none',
                                            marginRight: '-1px',
                                            color: selectedButton === 'automaticDiscount' ? '#000000' : null,
                                            boxShadow: selectedButton === 'discountCode' ? 'inset 0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
                                        }}
                                        onClick={() => handleButtonClick('discountCode')}
                                    >
                                        {t('discount.discountCode')}
                                    </Button>
                                    <Button
                                        color="primary"
                                        style={{
                                            backgroundColor: selectedButton === 'automaticDiscount' ? '#CCCCCC' : '#FFFFFF',
                                            border: 'none',
                                            color: selectedButton === 'discountCode' ? '#000000' : null,
                                            boxShadow: selectedButton === 'automaticDiscount' ? 'inset 0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
                                        }}
                                        onClick={() => handleButtonClick('automaticDiscount')}
                                    >
                                        {t('discount.automaticDiscount')}
                                    </Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        {selectedButton === 'discountCode' && (
                            <Row>
                                <Col md="12">
                                    <div className="mt-3">
                                        <Row>
                                            <Col md="10">
                                                <Label className="form-label" htmlFor="discountCode">{t('discount.discountCode')}</Label>
                                            </Col>
                                            <Col md="2" className="text-right">
                                                <a href="#" onClick={generateRandomCode} style={{ fontSize: '14px', color: 'blue' }}>
                                                    {t('discount.generateCode')}
                                                </a>
                                            </Col>
                                        </Row>
                                        <AvField
                                            {...getFieldProps('discountCode')}
                                            placeholder={t('discount.discountCode')}
                                            type="text"
                                            errorMessage={t('message.required')}
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="discountCode"
                                            value={generatedCode}
                                        />
                                        <span>{t('discount.adviceDiscountCode')}</span>
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {selectedButton === 'automaticDiscount' && (
                            <Row>
                                <Col md="12">
                                    <div className="mt-3">
                                        <Row>
                                            <Col md="10">
                                                <Label className="form-label" htmlFor="autoCode">{t('discount.autoCode')}</Label>
                                            </Col>
                                        </Row>
                                        <AvField
                                            {...getFieldProps('autoCode')}
                                            placeholder={t('discount.autoCode')}
                                            type="text"
                                            errorMessage={t('message.required')}
                                            className="form-control"
                                            validate={{ required: { value: true } }}
                                            id="autoCode"
                                        />
                                        <span>{t('discount.adviceAuto')}</span>
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    );
};

export default AmountOffProducts;
