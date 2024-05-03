import React from 'react';
import AmountOffProductForm from './AmountOffProductForm';
import PercentageForm from './PercentageForm';
import BuyXGetYForm from './BuyXGetYForm';
import { useParams } from 'react-router';

const DiscountForm = () => {
    const { type } = useParams();
    switch (type) {
        case 'amountOffProduct':
            return <AmountOffProductForm />;
        case 'percentage':
            return <PercentageForm />;
        case 'buyXgetY':
            return <BuyXGetYForm />;
        default:
            return null;
    }
};

export default DiscountForm;
