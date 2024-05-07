import React, { useMemo, useEffect, useState } from "react";
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Button, Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { countryActions } from "../../sagas/countrySlice";



const Address = ({ formik, countries }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;
    const { countries } = useSelector(state => state.data);


    const handleChangeCountry = ({ target }) => {
        formik.setFieldValue('country.id', target.value);
    }
    return (
        <FormikProvider value={formik}>
            <Card>
                <CardBody>
                    <AvForm >
                        <h4 className="card-title">{t('location.address')}</h4>
                        <Row>

                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="formlabel">{t('location.country')}</Label>
                                    <Col md={10}>
                                        <select className="form-control" onChange={handleChangeCountry}>
                                            <option>Sélectionner...</option>
                                            {countries?.map((option, index) =>
                                                <option key={index} value={option.id}>
                                                    {option.code}
                                                </option>
                                            )}
                                        </select>
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="address">{t('location.address')}</Label>
                                    <AvField
                                        {...getFieldProps('address')}
                                        placeholder={t('location.address')}
                                        type="text"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="address"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="appartment">{t('location.appartment')}</Label>
                                    <AvField
                                        {...getFieldProps('appartment')}
                                        placeholder={t('location.appartment')}
                                        type="text"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="appartment"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="address">{t('location.postalcode')}</Label>
                                    <AvField
                                        {...getFieldProps('postalCode')}
                                        type="text"
                                        placeholder={t('location.postalcode')}
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="postalcode"
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="address">{t('location.city')}</Label>
                                    <AvField
                                        {...getFieldProps('city')}
                                        type="text"
                                        placeholder={t('location.city')}
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="city"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {/* <Col md="2">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="flag">{t('location.phone')}</Label>
                                    <AvField
                                        {...getFieldProps('flag')}
                                        type="select"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="name"
                                    />
                                </div>
                            </Col> */}
                            <Col md="10">
                                <div className="mb-2">
                                    <Label className="form-label" htmlFor="phone"></Label>
                                    <AvField
                                        {...getFieldProps('phone')}
                                        placeholder={t('location.phone')}
                                        type="text"
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="phone"
                                    />
                                </div>
                            </Col>
                        </Row>

                    </AvForm>
                </CardBody>
            </Card>

        </FormikProvider>
    )
}

export default Address