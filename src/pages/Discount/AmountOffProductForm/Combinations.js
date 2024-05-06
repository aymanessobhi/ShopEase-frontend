import React, { useState } from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';

const Combinations = ({ formik, automaticDiscountClicked }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps, setFieldValue } = formik;
    const [showProductDiscountsInfo, setShowProductDiscountsInfo] = useState(false);
    const [showOrderDiscountsInfo, setShowOrderDiscountsInfo] = useState(false);
    const [showShippingDiscountsInfo, setShowShippingDiscountsInfo] = useState(false);

    const handleProductDiscountsChange = () => {
        setShowProductDiscountsInfo(!showProductDiscountsInfo);
        setFieldValue('combineWithProductDiscounts', !showProductDiscountsInfo);
    };

    const handleOrderDiscountsChange = () => {
        setShowOrderDiscountsInfo(!showOrderDiscountsInfo);
        setFieldValue('combineWithOrderDiscounts', !showOrderDiscountsInfo);
    };

    const handleShippingDiscountsChange = () => {
        setShowShippingDiscountsInfo(!showShippingDiscountsInfo);
        setFieldValue('combineWithShippingDiscounts', !showShippingDiscountsInfo);
    };

    const isAnyCheckboxChecked = () => {
        return showOrderDiscountsInfo; 
    };

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    {isAnyCheckboxChecked() && (
                        <div className="alert alert-warning" role="alert">
                            {t('discount.largeDiscountWarning')}
                        </div>
                    )}
                    <AvForm>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333' }}>{t('discount.combinesWith')}</span>
                        <div style={{ marginTop: '10px' }}>
                            <span style={{ fontSize: '15px', fontWeight: 'normal', color: '#333' }}>{t('discount.combinesWithDescription')}</span>
                            <div className="mb-3 form-check">
                                <AvField
                                    type="checkbox"
                                    name="combineWithProductDiscounts"
                                    {...getFieldProps('combineWithProductDiscounts')}
                                    value="combineWithProductDiscounts"
                                    id="combineWithProductDiscounts"
                                    onClick={handleProductDiscountsChange}
                                />
                                <label className="form-check-label" htmlFor="combineWithProductDiscounts">{t('discount.productDiscounts')}</label>
                                {showProductDiscountsInfo && (
                                    <p>{t('discount.productDiscountsInfo')}</p>
                                )}
                            </div>
                            <div className="mb-3 form-check">
                                <AvField
                                    type="checkbox"
                                    name="combineWithOrderDiscounts"
                                    {...getFieldProps('combineWithOrderDiscounts')}
                                    value="combineWithOrderDiscounts"
                                    id="combineWithOrderDiscounts"
                                    onClick={handleOrderDiscountsChange}
                                />
                                <label className="form-check-label" htmlFor="combineWithOrderDiscounts">{t('discount.orderDiscounts')}</label>
                                {showOrderDiscountsInfo && (
                                    <p>{t('discount.orderDiscountsInfo')}</p>
                                )}
                            </div>
                            <div className="mb-3 form-check">
                                <AvField
                                    type="checkbox"
                                    name="combineWithShippingDiscounts"
                                    {...getFieldProps('combineWithShippingDiscounts')}
                                    value="combineWithShippingDiscounts"
                                    id="combineWithShippingDiscounts"
                                    onClick={handleShippingDiscountsChange}
                                />
                                <label className="form-check-label" htmlFor="combineWithShippingDiscounts">{t('discount.shippingDiscounts')}</label>
                                {showShippingDiscountsInfo && (
                                    <p>{t('discount.shippingDiscountsInfo')}</p>
                                )}
                            </div>
                        </div>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    );
}

export default Combinations;
