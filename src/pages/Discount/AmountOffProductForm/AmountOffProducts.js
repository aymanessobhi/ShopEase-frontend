import React, { useState } from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Button, ButtonGroup, Card, CardBody, Col, Label, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';
import { useSelector } from 'react-redux';

const AmountOffProducts = ({ formik, handleButtonToggle }) => {
    const { t } = useTranslation('translation');
    const [selectedButton, setSelectedButton] = useState('AUTOMATIC');
    const { getFieldProps, setFieldValue } = formik;
    const [generatedCode, setGeneratedCode] = useState('');
    const { discountMethods } = useSelector(state => state.data);

    const handleButtonClick = (value) => {
        setSelectedButton(value);
        handleButtonToggle(value === 'AUTOMATIC');
        setFieldValue('discountMethod',value)
    };

    const generateRandomCode = () => {
        const randomCode = Math.random().toString(36).substring(2).toUpperCase();
        setGeneratedCode(randomCode);
        setFieldValue('discountCode', randomCode); 
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
                                    {discountMethods.map(method => (
                                        <Button
                                            key={method.code}
                                            color="primary"
                                            style={{
                                                backgroundColor: selectedButton === method.code ? '#CCCCCC' : '#FFFFFF',
                                                border: 'none',
                                                marginRight: '-1px',
                                                color: selectedButton === method.code ? '#000000' : '#000000',
                                                boxShadow: selectedButton === method.code ? 'inset 0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
                                            }}
                                            onClick={() => handleButtonClick(method.code)}
                                        >
                                            {method.description}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </Col>
                        </Row>
                        {selectedButton === 'CODE' && (
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
                                            disabled
                                        />
                                        <span>{t('discount.adviceDiscountCode')}</span>
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {selectedButton === 'AUTOMATIC' && (
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
