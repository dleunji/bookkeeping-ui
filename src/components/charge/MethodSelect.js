import styled from "styled-components";
import { faAngleDown, faPiggyBank, faFileInvoice, faBoxes, faFileInvoiceDollar, faCalendarDays, faCreditCard, faMobileButton, faTicket  } from "@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import { Menu, MenuItem } from "@mui/material/index";
import { IconButton } from "@mui/material/index";

const MethodSelectBlock = styled.div`
.method-block {
  display: flex;
  .method {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 27px 0px;
    position: relative;
    cursor: pointer;
    &:hover {
      background-color: #E5E5E5;
    }
    .method-icon {
      display: flex;
      justify-content: center;
      font-size: 45px;
    }
    .method-name {
      display: flex;
      margin-top: 20px;
      justify-content: center;
    }
    .badge {
      position: absolute;
      top: 5px;
      right: 15px;
      background-color: #FF0000;
      color: white;
      width: 32px;
      height: 22px;
      font-size: 13px;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
    }
    .angle-down {
      margin-left: 8px;
      align-items: center;
    }
  }
`;
const methods = [
  {
    name: "연결 계좌",
    icon: faPiggyBank,
    alertContent: "간편",
    value: "REGISTERED_ACCOUNT"
  },
  {
    name: "일괄 정산",
    icon: faCalendarDays,
    alertContent: "신규",
    value: "POST_PAYMENT"
  },
  {
    name: "신용/체크 카드",
    icon: faCreditCard,
    value: "CARD"
  },
  {
    name: "휴대폰",
    icon: faMobileButton,
    value: "PHONE"
  },
  {
    name: "상품권",
    icon: faTicket,
    value: "VOUCHER"
  },
  {
    name: "가상계좌",
    icon: faFileInvoice,
    value: "VIRTUAL_ACCOUNT"
  },
  {
    name: "실시간 계좌 이체",
    icon: faFileInvoiceDollar,
    value: "ACCOUNT_TRANSFER"
  },
  {
    name: "간편 결제",
    icon: faBoxes,
    value: "EASY_PAYMENT",
    items: [
      {
        name: "카카오페이",
        imgSrc: `${process.env.PUBLIC_URL}/images/kakao_img.png`,
        value: "KAKAO"
      },
      {
        name: "토스",
        imgSrc: `${process.env.PUBLIC_URL}/images/toss_img.png`,
        value: "TOSS"
      }
    ]
  }
];

const MethodSelect = ({anchorEl, handleClose, handleClick, handleMethod, itemRef}) => {
  const open = Boolean(anchorEl);
  
  return(
    <MethodSelectBlock>
      <div className="method-block">
        {
          methods.slice(0,4).map((method, idx) =>
            <div
              className="method"
              key={idx}
              onClick={() => handleMethod(methods[idx].value)}
            >
              {method.alertContent && <div className="badge">{method?.alertContent}</div>}
              <FontAwesomeIcon className="method-icon" icon={method.icon}/>
              <div className="method-name">{method.name}</div>
              {
                method.items && 
                <FontAwesomeIcon icon={faAngleDown}/>
              }
            </div>
          )
        }
      </div>
      <div className="method-block">
        {
          methods.slice(4,8).map((method, idx) =>
            <div
              className={`method ${idx}`}
              key={idx}
              onClick={() => handleMethod(methods[idx].value)}
              // aria-controls={open ? 'method-menu' : undefined}
              // aria-haspopup="true"
              // aria-expanded={open ? 'true' : undefined}
            >
              {method.alertContent && <div className="badge">{method?.alertContent}</div>}
              <FontAwesomeIcon className="method-icon" icon={method.icon}/>
              <div className="method-name">
                {method.name}
                {
                  method.items && 
                  <div
                    ref={itemRef}
                  >
                    <FontAwesomeIcon
                      className="angle-down"
                      icon={faAngleDown}
                      onClick={handleClick}
                      aria-controls={open ? 'method-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    />
                    <Menu
                      id="method-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top:0,
                            right: 1,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                          'img': {
                            marginRight: "10px"
                          }
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                      {method.items.map((item, idx) => 
                      <MenuItem key={idx} onClick={() => handleMethod(method.items[idx].value)}>
                        <img className="easy-icon" src={item.imgSrc} width="30px"/>
                        {item.name}
                      </MenuItem>)}
                    </Menu>
                  </div>
                }
              </div>
            </div>
          )
        }
      </div>
    </MethodSelectBlock>
  );
}

export default MethodSelect;