import React, { useState } from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { FormikProvider } from 'formik';

const MaximumDiscountUses = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps, values } = formik;
    const [showTotalUsageLimit, setShowTotalUsageLimit] = useState(false);

    const handleTotalUsageLimitChange = () => {
        setShowTotalUsageLimit(!showTotalUsageLimit);
    };

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333' }}>{t('discount.maximumDiscountUses')}</span>
                        <Row>
                            <Col md="12">
                                <div className="mb-3 form-check">
                                    <AvField
                                        type="checkbox"
                                        name="limitTotalUsage"
                                        {...getFieldProps('limitTotalUsage')}
                                        className="form-check-input"
                                        id="limitTotalUsage"
                                        onChange={handleTotalUsageLimitChange}
                                    />
                                    <label className="form-check-label" htmlFor="limitTotalUsage">{t('discount.limitTotalUsage')}</label>
                                </div>
                                {showTotalUsageLimit && (
                                    <div className="mb-3">
                                        <AvField
                                            name="totalUsageLimit"
                                            type="number"
                                            min="1"
                                            className="form-control"
                                            {...getFieldProps('totalUsageLimit')}
                                            placeholder={t('discount.totalUsageLimit')}
                                        />
                                    </div>
                                )}
                                <div className="mb-3 form-check">
                                    <AvField
                                        type="checkbox"
                                        name="limitPerCustomer"
                                        {...getFieldProps('limitPerCustomer')}
                                        className="form-check-input"
                                        id="limitPerCustomer"
                                    />
                                    <label className="form-check-label" htmlFor="limitPerCustomer">{t('discount.limitToPerCustomer')}</label>
                                </div>
                            </Col>
                        </Row>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    );
};

export default MaximumDiscountUses;
