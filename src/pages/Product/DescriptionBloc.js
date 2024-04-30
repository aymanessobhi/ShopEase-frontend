import React from 'react';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';

const DescriptionBloc = ({ formik }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;

    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm>
                        <Row>
                            <Col md="12">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="title">{t('product.title')}</Label>
                                    <AvField
                                        {...getFieldProps('title')}
                                        placeholder={t('product.title')}
                                        type="text"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="title"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="description">{t('product.description')}</Label>
                                    <AvField
                                        {...getFieldProps('description')}
                                        placeholder={t('product.description')}
                                        type="textarea"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="description"
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

export default DescriptionBloc;
