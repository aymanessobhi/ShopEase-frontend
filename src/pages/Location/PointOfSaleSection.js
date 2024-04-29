import React from 'react'
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';

const PointOfSaleSection = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;
    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                    <h4 className="card-title">{t('location.pointOfSale')}</h4>
                        <p>{t('location.posDescription')}</p>
                    </AvForm>
                </CardBody>
            </Card>
        </FormikProvider>
    )
}

export default PointOfSaleSection