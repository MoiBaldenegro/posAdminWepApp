import styles from './autorizaciones.module.css';
//  Icons
import disquetIcon from '../../../../assets/public/disquetIcon.svg';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
// Vars
import { apps, modules, posActions } from './admin/admin.modules';
import { useEffect, useState } from 'react';
import { getUsersAction } from '../../../../redux/actions/auth';
import {
  ADMIN_APP,
  POS_APP,
  RESTAURANT,
  SellTypes,
  actionsAuthsRestaurant,
  adminModules,
  appsAuth,
} from '../../../../lib/autorizations.lib';
import { SellTypesPos, SendAuth } from './auth.types';
import { useUsersStore } from '../../../../zstore/users.store';
import { useModal } from '../../../../hooks/useModals';
import { CONFIRM_CHANGES } from '../../../../configs/consts';
import ConfirmChangesModal from '../../../modals/confimChanges/confirmChanges';

export default function Autorizaciones() {
  const { allUsers } = useSelector((state) => state.auth);
  const [select, setSelect] = useState(false);
  const { allProfiles } = useSelector((state) => state.profiles);
  const toggleSelect = () => {
    setSelect(!select);
  };
  const [admin, setAdmin] = useState(false);
  const [pos, setPos] = useState(false);
  const [settingApp, setSettingApp] = useState('');
  const [settingModule, setSettingModule] = useState('');
  const [addAuthAdmin, setAddAuthAdmin] = useState({});
  const [addAuthPos, setAddAuthPos] = useState<SellTypesPos>({});
  const [selectedUser, setSelecteduser] = useState();

  const updateAuths = useUsersStore((state) => state.updateUser);
  const aptIsLoading = useUsersStore((state) => state.isLoading);
  const aptErrors = useUsersStore((state) => state.isLoading);
  const aptMessage = useUsersStore((state) => state.message);

  const confirmChanges = useModal(CONFIRM_CHANGES);

  const adminAuths = {
    auths: [],
    authProps: [],
  };

  const sendUserAuthData: SendAuth = {
    admin: { active: admin, modules: addAuthAdmin },
    pos: { active: pos, sellTypes: addAuthPos },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(allUsers);
    dispatch(getUsersAction());
  }, []);
  return (
    <div className={styles.container}>
      {confirmChanges.isOpen && confirmChanges.modalName === CONFIRM_CHANGES ? (
        <ConfirmChangesModal
          loading={aptIsLoading}
          errors={aptErrors}
          isOpen={confirmChanges.isOpen}
          onClose={confirmChanges.closeModal}
        >
          Cambios guardados
        </ConfirmChangesModal>
      ) : null}
      <h1 className={styles.tittle}>
        Autorizaciones
        <button
          className={styles.saveButton}
          onClick={() => {
            confirmChanges.openModal();

            updateAuths(selectedUser?._id, {
              authorizations: sendUserAuthData,
            });
          }}
        >
          <img src={disquetIcon} alt="save-icon" />
          Guardar
        </button>
      </h1>
      <section>
        {select ? (
          <div className={styles.containerOne}>
            <div className={styles.tittles}>
              <h3 className={styles.profiles} onClick={toggleSelect}>
                Perfiles
              </h3>
              <h3 className={styles.employees} onClick={toggleSelect}>
                Empleados
              </h3>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.list}>
                {allProfiles?.map((element) => (
                  <h4 className={styles.item}>{element.profileName}</h4>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.containerOne}>
            <div className={styles.tittles}>
              <h3 className={styles.profilesTwo} onClick={toggleSelect}>
                Perfiles
              </h3>
              <h3 className={styles.employeesTwo} onClick={toggleSelect}>
                Empleados
              </h3>
            </div>
            <div className={styles.contentContainerTwo}>
              <div className={styles.list}>
                {allUsers?.map((element) => (
                  <div
                    className={styles.itemCode}
                    style={
                      selectedUser?._id === element._id
                        ? { background: '#ffffff1a' }
                        : {}
                    }
                    onClick={() => {
                      setSelecteduser(element);
                    }}
                  >
                    <h4
                      className={styles.item}
                    >{`${element.name.toUpperCase()} ${element.lastName.toUpperCase()}`}</h4>
                    <h4 className={styles.item}>{element.employeeNumber}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className={styles.inContainerOne}>
          <h2 className={styles.tittleOne}>Autorización por módulos</h2>
          <div className={styles.inListOne}>
            {appsAuth.map((element) => (
              <div
                style={
                  settingApp === element.name ? { background: '#ffffff1a' } : {}
                }
                className={styles.inputOne}
                onClick={() => {
                  setSettingApp(element.name);
                  setSettingModule('');
                }}
              >
                <label className={styles.label}>{element.name}</label>
              </div>
            ))}
          </div>
          <div className={styles.inListTwo}>
            {settingApp === ADMIN_APP
              ? adminModules.map((element) => (
                  <div
                    onClick={() => {
                      setSettingModule(element.name);
                    }}
                    className={styles.inputOne}
                    key={element.name}
                    style={
                      settingModule === element.name
                        ? { background: '#ffffff1a' }
                        : {}
                    }
                  >
                    <label className={styles.label}>{element.name}</label>
                  </div>
                ))
              : settingApp === POS_APP
              ? SellTypes.map((element) => (
                  <div
                    onClick={() => {
                      setSettingModule(element.value);
                    }}
                    className={styles.inputOne}
                    key={element.name}
                    style={
                      settingModule === element.value
                        ? { background: '#ffffff1a' }
                        : {}
                    }
                  >
                    <label className={styles.label}>{element.name}</label>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className={styles.inContainerTwo}>
          <div className={styles.head}>
            <h2 className={styles.tittleTwo}>Autorización por acciones</h2>
            <button className={styles.allButton}>Seleccionar todo</button>
          </div>
          {settingModule === RESTAURANT && settingApp === POS_APP ? (
            <div className={styles.inListThree}>
              {actionsAuthsRestaurant.map((element) => (
                <div className={styles.inputTwo}>
                  <label
                    className={styles.labelTwo}
                    onClick={() => {
                      const restaurantSellTypes =
                        sendUserAuthData?.pos?.sellTypes?.restaurant || [];

                      if (restaurantSellTypes.includes(element.value)) {
                        setAddAuthPos({
                          ...addAuthPos,
                          restaurant: restaurantSellTypes.filter(
                            (item) => item !== element.value,
                          ),
                        });
                      } else {
                        setAddAuthPos({
                          ...addAuthPos,
                          restaurant: addAuthPos.restaurant
                            ? [...addAuthPos.restaurant, element.value]
                            : [element.value],
                        });
                      }

                      console.log(sendUserAuthData);
                    }}
                  >
                    <input
                      type="checkbox"
                      className={styles.check}
                      checked={
                        sendUserAuthData?.pos?.sellTypes?.restaurant?.includes(
                          element.value,
                        ) ?? false
                      }
                    />
                    {element.name}
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.inListThreeActions}></div>
          )}
        </div>
      </section>
    </div>
  );
}
