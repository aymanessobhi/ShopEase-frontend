import React from 'react';
import AmountOffProductForm from './AmountOffProductForm';
import PercentageForm from './PercentageForm';
import BuyXGetYForm from './BuyXGetYForm';
import { useParams } from 'react-router';

const DiscountForm = () => {
    const { type } = useParams();
    switch (type) {
        case 'OFF_PRODUCT':
            return <AmountOffProductForm />;
        case 'AMOUNT_OFF':
            return <PercentageForm />;
        case 'BUYGET':
            return <BuyXGetYForm />;
        default:
            return null;
    }
};

export default DiscountForm;
