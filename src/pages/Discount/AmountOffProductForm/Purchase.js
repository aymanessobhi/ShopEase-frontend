import React from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';
import { useSelector } from 'react-redux';

const Purchase = ({ formik, automaticDiscountClicked }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps, values } = formik;

    const {discMinP} = useSelector(state => state.data);

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333' }}>{t('discount.minimumPurchaseRequirements')}</span>
                        <div style={{ marginTop: '10px' }}>
                            <span style={{ fontSize: '15px', fontWeight: 'normal', color: '#333' }}>{t('discount.minimumPurchaseDescription')}</span>
                            {discMinP.map((item, index) => (
                                <div key={index} className="mb-3 form-check">
                                    <AvField
                                        {...getFieldProps('minimumPurchaseRequirement')}
                                        type="radio"
                                        value={item.code}
                                        className="form-check-input"
                                        id={`minimumPurchaseRequirement_${index}`}
                                        disabled={item.code === 'NO_MIN' && !automaticDiscountClicked}
                                    />
                                    <label className="form-check-label" htmlFor={`minimumPurchaseRequirement_${index}`}>{item.description}</label>
                                    {values.minimumPurchaseRequirement === item.code && item.code=== 'MIN_AMOUNT' && (
                                        <>
                                            <AvField
                                                name="minimumAmountValue"
                                                type="number"
                                                min="0"
                                                step="0.01"
                                                placeholder={t('discount.enterAmount')}
                                                errorMessage={t('message.required')}
                                                className="form-control"
                                                {...getFieldProps('minimumAmountValue')}
                                            />
                                            <span>{t('purchase.adviceA')}</span>
                                        </>
                                    )}
                                    {values.minimumPurchaseRequirement === item.code && item.code === 'MIN_QTE' && (
                                        <>
                                            <AvField
                                                name="minimumQuantityValue"
                                                type="number"
                                                min="0"
                                                step="1"
                                                placeholder={t('discount.enterQuantity')}
                                                errorMessage={t('message.required')}
                                                className="form-control"
                                                {...getFieldProps('minimumQuantityValue')}
                                            />
                                            <span>{t('purchase.adviceB')}</span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    );
}

export default Purchase;
