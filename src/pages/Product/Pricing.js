import React, { useEffect, useState } from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';

const Pricing = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;
    const [price, setPrice] = useState('');
    const [costPerItem, setCostPerItem] = useState('');
    const [profit, setProfit] = useState('');
    const [margin, setMargin] = useState('');

    useEffect(() => {
        if (price !== '' && costPerItem !== '') {
            const calculatedProfit = parseFloat(price) - parseFloat(costPerItem);
            setProfit(calculatedProfit.toFixed(2));

            const calculatedMargin = (calculatedProfit / parseFloat(price)) * 100;
            setMargin(calculatedMargin.toFixed(2));
        }
    }, [price, costPerItem]);

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <h4 className="card-title">{t('product.pricing')}</h4>
                        <Row>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="price">{t('product.price')}</Label>
                                    <AvField
                                        name="price"
                                        value={price}
                                        onChange={(e) => {
                                            setPrice(e.target.value);
                                            setProfit('');
                                            setMargin('');
                                        }}
                                        placeholder={t('product.price')}
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="price"
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="comparePrice">{t('product.comparePrice')}</Label>
                                    <AvField
                                        name="comparePrice"
                                        {...getFieldProps('comparePrice')}
                                        placeholder={t('product.comparePrice')}
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="comparePrice"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <div className="mb-3 form-check">
                                    <input type="checkbox" {...getFieldProps('taxable')} className="form-check-input" id="taxable" />
                                    <Label className="form-check-label" htmlFor="taxable">{t('product.taxable')}</Label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="costPerItem">{t('product.costPerItem')}</Label>
                                    <AvField
                                        name="costPerItem"
                                        value={costPerItem}
                                        onChange={(e) => {
                                            setCostPerItem(e.target.value);
                                            setProfit('');
                                            setMargin('');
                                        }}
                                        placeholder={t('product.costPerItem')}
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        id="costPerItem"
                                    />
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="profit">{t('product.profit')}</Label>
                                    <AvField
                                        name="profit"
                                        value={profit}
                                        readOnly
                                        placeholder={t('product.profit')}
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        className="form-control"
                                        id="profit"
                                    />
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="margin">{t('product.margin')}</Label>
                                    <AvField
                                        name="margin"
                                        value={margin ? `${margin}%` : ''}
                                        readOnly
                                        placeholder={t('product.margin')}
                                        type="text"
                                        className="form-control"
                                        id="margin"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    );
}

export default Pricing;
