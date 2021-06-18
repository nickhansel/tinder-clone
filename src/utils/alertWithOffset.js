import { message } from 'antd';

export const alertWithOffset = (
  condition,
  messageTxt,
  action = () =>{},
  timeout = 1000
) => {
  setTimeout(function() {
    if (!condition) {
      message.success(messageTxt);
    }
    action();
  }, timeout);
};