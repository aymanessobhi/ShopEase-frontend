import React from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';

const Inventory = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <h4 className="card-title">{t('product.inventory')}</h4>
                        <Row>
                            <Col md="6">
                                <div className="mb-3 form-check">
                                    <input type="checkbox" {...getFieldProps('track')} className="form-check-input" id="track" />
                                    <Label className="form-check-label" htmlFor="track">{t('product.track')}</Label>
                                </div>
                            </Col>
                        </Row>
                        <h4 className="card-title">{t('product.quantity')}</h4>
                        <hr></hr>
                        <Row>
                        <Col md="6">
                            <p className="card-title">casablanca</p>
                        </Col>
                        <Col md="6">
                                <div className="mb-3">
                                    <AvField
                                        name="quantity"
                                        {...getFieldProps('quantity')}
                                        type="number"
                                        min="0"
                                        value="0"
                                        step="0.01"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="quantity"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <div className="mb-3 form-check">
                                    <input type="checkbox" {...getFieldProps('continueSelling')} className="form-check-input" id="continueSelling" />
                                    <Label className="form-check-label" htmlFor="continueSelling">{t('product.continueSelling')}</Label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <div className="mb-3 form-check">
                                    <input type="checkbox" {...getFieldProps('skuOrBarcode')} className="form-check-input" id="skuOrBarcode" />
                                    <Label className="form-check-label" htmlFor="skuOrBarcode">{t('product.skuOrBarcode')}</Label>
                                </div>
                            </Col>
                        </Row>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    );
};

export default Inventory;
