/*
 * @Author: lijin
 * @Date: 2021-09-09 15:13:04
 * @LastEditTime: 2021-09-09 15:16:22
 * @LastEditors: lijin
 * @Description:
 * @FilePath: \wargerm\src\Button\index.tsx
 * 可以输入预定的版权声明、个性签名、空行等
 */

import React, { useState, FC, useEffect, useMemo, memo } from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface IMultiple {
  handleMenuClick?: (e: any) => void;
  handleClick?: (e: any) => void;
  children?: String[];
}

export interface IButtonProps extends ButtonProps {
  multiple?: IMultiple;
}

const WButton: FC<IButtonProps> = props => {
  const { multiple, children, disabled, ...extraProps } = props;
  const menu = (
    <Menu onClick={multiple && multiple.handleMenuClick}>
      {multiple &&
        multiple.children &&
        multiple.children.map((child, index) => (
          <Menu.Item key={index}>{child}</Menu.Item>
        ))}
    </Menu>
  );

  return multiple ? (
    <Dropdown.Button
      disabled={disabled}
      onClick={multiple && multiple.handleClick}
      overlay={menu}
    >
      {children}
    </Dropdown.Button>
  ) : (
    <Button disabled={disabled} {...extraProps}>
      {children}
    </Button>
  );
};

WButton.defaultProps = {};

export default WButton;
