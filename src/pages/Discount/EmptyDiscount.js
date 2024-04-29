import React from 'react'
import { Button, Card, CardBody, CardFooter, Col } from 'reactstrap'
import discount from "../../assets/images/discount.png";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const EmptyDiscount = () => {
    const { t } = useTranslation('translation');
    return (
        <Card>
            <CardBody>
                <div className="mb-4 d-flex justify-content-center text-center">
                    <img src={discount} alt="Discount" style={{ maxWidth: '30%', height: 'auto' }} />
                </div>
                <div className="mb-1 d-flex justify-content-center text-center">
                    <h4>{t('discount.manage')}</h4>
                </div>
                <div className="mb-2 d-flex justify-content-center text-center">
                    <p>{t('discount.createDiscountDescription')}<Link>{t('discount.pricesLink')}</Link></p>
                </div>
                <Col md="12" className="d-flex justify-content-center text-center">
                    <div div className="mb-3">
                        <Button>{t('discount.createDiscount')}</Button>
                    </div>
                </Col>
            </CardBody>
        </Card>
    )
}

export default EmptyDiscount