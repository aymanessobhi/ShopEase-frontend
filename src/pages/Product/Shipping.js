import React from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';

const Shipping = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <h4 className="card-title">{t('product.shippingg')}</h4>
                        <Row>
                            <Col md="6">
                                <div className="mb-3 form-check">
                                    <input type="checkbox" {...getFieldProps('shipping')} className="form-check-input" id="shipping" />
                                    <Label className="form-check-label" htmlFor="shipping">{t('product.shipping')}</Label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="weight">{t('product.weight')}</Label>
                                    <AvField
                                        {...getFieldProps('weight')}
                                        placeholder={t('product.weight')}
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="weight"
                                    />
                                </div>
                            </Col>
                            <Col md="2">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="weightUnit"></Label>
                                    <select {...getFieldProps('weightUnit')} className="form-select">
                                        <option value="kg">Kg</option>
                                        <option value="lb">lb</option>
                                        <option value="g">g</option>
                                        <option value="oz">oz</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    );
}

export default Shipping;
