/*
 * Copyright 2020 WICKLETS LLC
 *
 * This file is part of Wick Editor.
 *
 * Wick Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Wick Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Wick Editor.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';

import WickInput from 'Editor/Util/WickInput/WickInput';
import ToolIcon from 'Editor/Util/ToolIcon/ToolIcon';

import './_actionbutton.scss';

var classNames = require('classnames');

class ActionButton extends Component {

  runAction = () => {
    if (!this.props.disabled) this.props.action();
  }

  render() {
    let isActive = this.props.isActive === undefined ? () => false : this.props.isActive;

    let colorClass = this.props.color === undefined ? "action-button-green" : "action-button-"+this.props.color;
    let finalColorClassName = classNames(colorClass, {'active-button' : isActive()}, this.props.buttonClassName)

    let tooltipID = this.props.id === undefined ? 'action-button-tooltip-nyi' : ('action-button-tooltip-' + this.props.id);

    let newClassName = classNames("action-button", this.props.className);

    return (
      <div className={newClassName}>
        <WickInput
          buttonProps={this.props.buttonProps}
          tooltip={this.props.tooltip}
          tooltipID={tooltipID}
          tooltipPlace={this.props.tooltipPlace}
          className={finalColorClassName}
          type="button"
          secondaryAction={this.props.secondaryAction}
          onClick={this.runAction}
          onTouch={this.runAction}>
          {this.props.dropdown ? 
          <div className="icons-container">
            {this.props.icon && <ToolIcon className={classNames(this.props.iconClassName)} name={this.props.icon} />}
            {this.props.dropdown && <ToolIcon className="dropdown-extra-icon" name="moreactions"/>}
          </div>
          :
          this.props.icon && <ToolIcon className={classNames(this.props.iconClassName)} name={this.props.icon} />}
          {this.props.text && <div className={classNames(newClassName+'-text', this.props.textClassName)}>{this.props.text}</div>}
        </WickInput>
      </div>
    )
  }
}

export default ActionButton
