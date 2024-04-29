import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Container} from "reactstrap";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from "../../components/Common/TableContainer";

const StaffPage = () => {
    const { t } = useTranslation('translation');
    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('staff'), link: "#" }
    ];
    const navigate = useNavigate();
    const staffs = []
    const columns = useMemo(
        () => [
            {
                Header: t('name'),
                accessor: "name",
                disableFilters: true,
                filterable: false,
              },
              {
                Header: t('access'),
                accessor: "access",
                disableFilters: true,
                filterable: false,
              },
              {
                Header: t('posRole'),
                accessor: "PosRole",
                disableFilters: true,
                filterable: false,
              },
              {
                Header: t('locations'),
                accessor: "location",
                disableFilters: true,
                filterable: false,
              },
        ],
        []
      );

  return (
    <React.Fragment>
    <div className="page-content">
        <Container fluid>
            <Breadcrumbs title={t('staff')} breadcrumbItems={breadcrumbItems} />

            <Card>
                <CardBody>
                <TableContainer
                        columns={columns || []}
                        data={staffs || []}
                        isPagination={false}
                        isAddStaffList={true}
                        customPageSizeOptions={true}
                        iscustomPageSize={false}
                        handleStaffClick={() => navigate("/base/staff/new")}
                        isBordered={false}
                        customPageSize={10}
                    />
                </CardBody>
            </Card>
        </Container>
    </div>
</React.Fragment>
  )
}

export default StaffPage