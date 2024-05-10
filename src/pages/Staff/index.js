import React, { useMemo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Container ,Modal, ModalBody, ModalFooter, ModalHeader , Button} from "reactstrap";
import {Link, useNavigate } from "react-router-dom";
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from "../../components/Common/TableContainer";
import { staffActions } from "../../sagas/staffSlice";
import { useDispatch ,useSelector} from 'react-redux';
import { DATABASE_STAFF_EDIT } from "../../routes/routeConstants";



const StaffPage = () => {
    const { t } = useTranslation('translation');
    const { staffs, loading } = useSelector((state) => state.staff);
    const [record, setRecord] = useState({ open: false, data: null });

    const breadcrumbItems = [
        { title: t('database'), link: "#" },
        { title: t('staffs'), link: "#" }
    ];
    const navigate = useNavigate();
    const columns = useMemo(
        () => [
            {
                Header: t('staff.firstname'),
                accessor: "firstName",
                disableFilters: true,
                filterable: false,
              },
              {
                Header: t('staff.lastname'),
                accessor: "lastName",
                disableFilters: true,
                filterable: false,
              },
              {
                Header: t('staff.email'),
                accessor: "email",
                disableFilters: true,
                filterable: false,
              },
              {
                Header: t('staff.phone'),
                accessor: "phone",
                disableFilters: true,
                filterable: false,
              },
              {
                Header: t('staff.pin'),
                accessor: "pin",
                disableFilters: true,
                filterable: false,
              },
              {
                Header: t('staff.posrole'),
                accessor: "posRole",
                disableFilters: true,
                filterable: false,
              },
              {
                Header: t('locations'),
                accessor: (staff) => {
                  
                  let loc = '';
                  staff.locations.map((location)=>{loc=loc+location.name+' / '})
                  return loc
                },
                disableFilters: true,
                filterable: false,
              },
              {
                Header: t('action'),
                accessor: (cellProps) => {
                    return (
                        <React.Fragment>
                            <Link to={DATABASE_STAFF_EDIT.replace(":id", cellProps.id)} className="me-3 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
                            <Link onClick={() => handleDelete(cellProps)} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                        </React.Fragment>
                    )
                },
                disableFilters: true,
                filterable: false,
            },

        ],
        []
      );

      const handleDelete = (cellProps) => {
        setRecord({ open: true, data: cellProps })
    }
    const confirmDelete = () => {
      setRecord({ ...record, open: false })
      let payload = {
          id: record.data.id,
          onSuccess: () => {
              dispatch(staffActions.stafffetch());
          },
          onError: (error) => {
              console.log(error)
          },
      };
      dispatch(staffActions.delete(payload));
  }

      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(staffActions.stafffetch());  
    }, []);

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
    <Modal
                isOpen={record.open}
                toggle={() => setRecord({ ...record, open: false })}
                backdrop="static"
            >
                <ModalHeader toggle={() => setRecord({ ...record, open: false })}>
                    {t('text.confirmation')}
                </ModalHeader>
                <ModalBody>
                    <p>
                        {t('text.msgDelete')}
                    </p>
                    <ModalFooter>
                        <Button type="button" color="light" onClick={() => setRecord({ ...record, open: false })}>{t('actions.close')}</Button>
                        <Button type="button" color="primary" onClick={confirmDelete}>{t('actions.confirm')}</Button>
                    </ModalFooter>
                </ModalBody>
            </Modal>


</React.Fragment>
  )
}

export default StaffPage