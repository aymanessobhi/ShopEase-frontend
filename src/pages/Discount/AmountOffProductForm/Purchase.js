import React from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Card, CardBody } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';

const Purchase = ({ formik, automaticDiscountClicked }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps, values } = formik;

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333' }}>{t('discount.minimumPurchaseRequirements')}</span>
                        <div style={{ marginTop: '10px' }}>
                            <span style={{ fontSize: '15px', fontWeight: 'normal', color: '#333' }}>{t('discount.minimumPurchaseDescription')}</span>
                            <div className="mb-3 form-check">
                                <AvField
                                    {...getFieldProps('minimumPurchaseRequirement')}
                                    type="radio"
                                    value="none"
                                    className="form-check-input"
                                    id="noMinimumRequirements"
                                    disabled={!automaticDiscountClicked}
                                />
                                <label className="form-check-label" htmlFor="noMinimumRequirements">{t('discount.noMinimumRequirements')}</label>
                            </div>
                            <div className="mb-3 form-check">
                                <AvField
                                    {...getFieldProps('minimumPurchaseRequirement')}
                                    type="radio"
                                    value="amount"
                                    className="form-check-input"
                                    id="minimumAmount"
                                />
                                <label className="form-check-label" htmlFor="minimumAmount">{t('discount.minimumPurchaseAmount')} (MAD)</label>
                                {values.minimumPurchaseRequirement === 'amount' && (
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
                            </div>
                            <div className="mb-3 form-check">
                                <AvField
                                    {...getFieldProps('minimumPurchaseRequirement')}
                                    type="radio"
                                    value="quantity"
                                    className="form-check-input"
                                    id="minimumQuantity"
                                />
                                <label className="form-check-label" htmlFor="minimumQuantity">{t('discount.minimumQuantityOfItems')}</label>
                                {values.minimumPurchaseRequirement === 'quantity' && (
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
                        </div>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    );
}

export default Purchase;
