import React, { Component } from 'react';
import no from '../NotificationFB/NotificationFB.module.css';

export class NotificationFB extends Component {
  render() {
    return <p className={no.text}>{this.props.message}</p>;
  }
}
