import React, { useMemo, useEffect, useState } from "react";
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { useTranslation } from 'react-i18next';
import { Button, Card, CardBody, Col, Label, Row } from 'reactstrap';
import { FormikProvider } from 'formik';
import { useDispatch ,useSelector} from 'react-redux';
import { countryActions } from "../../sagas/countrySlice";



const Address = ({ formik ,countries }) => {
    const { t } = useTranslation('translation');
    const { getFieldProps } = formik;


    const handleChangeCountry = ({ target }) => {
        console.log('target',target.value);
        formik.getFieldProps('countryId', countries.find(d => d.id === target.value));
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
                                        {...getFieldProps('dto.address')}
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
                                        {...getFieldProps('dto.appartment')}
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
                                        {...getFieldProps('dto.postal_code')}
                                        type="text"
                                        placeholder={t('location.postalcode')}
                                        errorMessage={t('message.required')}
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="name"
                                    />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="mb-3">
                                    <Label className="form-label" htmlFor="address">{t('location.city')}</Label>
                                    <AvField
                                        {...getFieldProps('dto.city')}
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
                                        {...getFieldProps('dto.phone')}
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